package br.com.seguranca.server.service;

import br.com.seguranca.server.dto.ReservasDTO;
import br.com.seguranca.server.exception.BusinessException;
import br.com.seguranca.server.exception.ResourceNotFoundException;
import br.com.seguranca.server.model.Reservas;
import br.com.seguranca.server.model.Ingresso;
import br.com.seguranca.server.model.Usuario;
import br.com.seguranca.server.repositories.ReservasRepository;
import br.com.seguranca.server.repositories.IngressoRepository;
import br.com.seguranca.server.repositories.UsuarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservasService {

    private final ReservasRepository reservasRepository;
    private final IngressoRepository ingressoRepository;
    private final UsuarioRepository usuarioRepository;

    public ReservasService(
            ReservasRepository reservasRepository,
            IngressoRepository ingressoRepository,
            UsuarioRepository usuarioRepository) {
        this.reservasRepository = reservasRepository;
        this.ingressoRepository = ingressoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    private ReservasDTO toResponseDTO(Reservas reserva) {
        ReservasDTO dto = new ReservasDTO();
        dto.setId(reserva.getId());
        dto.setQuantidade(reserva.getQuantidade());
        dto.setDataReserva(reserva.getDataReserva());

        if (reserva.getIngresso() != null) {
            dto.setIngresso(reserva.getIngresso());
        }
        if (reserva.getUsuario() != null) {
            dto.setUsuario(reserva.getUsuario());
        }
        return dto;
    }

    @Transactional(readOnly = true)
    public ReservasDTO criar(ReservasDTO requestDTO) {
        Ingresso ingresso = ingressoRepository.findById(requestDTO.getIngresso().getId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Ingresso não encontrado com ID: " + requestDTO.getIngresso().getId()));

        Usuario usuario = usuarioRepository.findById(requestDTO.getUsuario().getId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Usuário não encontrado com ID: " + requestDTO.getUsuario().getId()));

        int quantidadeRequerida = requestDTO.getQuantidade();

        if (ingresso.getQtdAtual() < quantidadeRequerida) {
            throw new BusinessException(
                    "Não há estoque suficiente. Apenas " + ingresso.getQtdAtual() + " ingressos restantes.");
        }

        ingresso.setQtdAtual(ingresso.getQtdAtual() - quantidadeRequerida);

        ingressoRepository.save(ingresso);

        Reservas reserva = new Reservas();
        reserva.setIngresso(ingresso);
        reserva.setUsuario(usuario);
        reserva.setQuantidade(quantidadeRequerida);
        reserva.setDataReserva(LocalDate.now());

        Reservas reservaSalva = reservasRepository.save(reserva);

        return toResponseDTO(reservaSalva);
    }

     public List<ReservasDTO> listarPorUsuarioId(Long usuarioId) {
        List<Reservas> reservas = reservasRepository.findByUsuarioId(usuarioId);

        return reservas.stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }


    @Transactional(readOnly = true)
    public ReservasDTO buscarPorId(Long id) {
        Reservas reserva = reservasRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reserva não encontrada com ID: " + id));

        return toResponseDTO(reserva);
    }

    @Transactional(readOnly = true)
    public List<ReservasDTO> listarTodos() {
        List<Reservas> reservas = reservasRepository.findAll();

        return reservas.stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public void deletar(Long id) {
        Reservas reserva = reservasRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reserva não encontrada para exclusão com ID: " + id));

        Ingresso ingresso = reserva.getIngresso();
        int quantidadeDevolvida = reserva.getQuantidade();

        if (ingresso != null) {
            int novaQtdAtual = ingresso.getQtdAtual() + quantidadeDevolvida;

            ingresso.setQtdAtual(novaQtdAtual);

            ingressoRepository.save(ingresso);
        } else {
            System.err.println("Atenção: Reserva ID " + id + " deletada, mas não estava vinculada a um Ingresso.");
        }

        reservasRepository.delete(reserva);
    }
}