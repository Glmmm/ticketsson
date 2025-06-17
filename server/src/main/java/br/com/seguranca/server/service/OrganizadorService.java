package br.com.seguranca.server.service;

import br.com.seguranca.server.dto.OrganizadorDto;
import br.com.seguranca.server.form.FormOrganizador;
import br.com.seguranca.server.model.Organizador;
import br.com.seguranca.server.repositories.EventoRepository;
import br.com.seguranca.server.repositories.OrganizadorRepository;
import br.com.seguranca.server.repositories.IngressoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizadorService {

    private final OrganizadorRepository organizadorRepository;
    private final EventoRepository eventoRepository;
    private final IngressoRepository ingressoRepository;

    public OrganizadorService(OrganizadorRepository organizadorRepository,
                              EventoRepository eventoRepository,
                              IngressoRepository ingressoRepository) {
        this.organizadorRepository = organizadorRepository;
        this.eventoRepository = eventoRepository;
        this.ingressoRepository = ingressoRepository;
    }

    public Organizador buscarOrganizadorPorId(Long id) {
        return organizadorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Organizador não encontrado com o ID: " + id));
    }

    public boolean organizadorExistePorEmail(String email) {
        return organizadorRepository.existsByEmail(email);
    }

    public List<OrganizadorDto> listarOrganizadores() {
        List<Organizador> organizadores = organizadorRepository.findAll();
        return organizadores.stream().map(OrganizadorDto::converter).toList();
    }

    public OrganizadorDto cadastrarOrganizador(FormOrganizador dados) {
        if (organizadorExistePorEmail(dados.getEmail()))
            throw new RuntimeException("Organizador com email já cadastrado!");
        Organizador organizador = new Organizador(
                dados.getId(),
                dados.getNome(),
                dados.getEndereco(),
                dados.getCep(),
                dados.getTelefone(),
                dados.getEmail()
        );
        organizador = organizadorRepository.save(organizador);
        return OrganizadorDto.converter(organizador);
    }

    public OrganizadorDto editarOrganizadores(FormOrganizador dados){
        Organizador organizador = buscarOrganizadorPorId(dados.getId());
        organizador.setNome(dados.getNome());
        organizador.setEndereco(dados.getEndereco());
        organizador.setCep(dados.getCep());
        organizador.setTelefone(dados.getTelefone());
        organizador.setEmail(dados.getEmail());
        organizador = organizadorRepository.save(organizador);
        return OrganizadorDto.converter(organizador);
    }

    @Transactional
    public OrganizadorDto deletarOrganizador(Long id) {
        Organizador organizador = buscarOrganizadorPorId(id);
        ingressoRepository.deletarIngressosPorOrganizadorId(id);
        eventoRepository.deletarPorOrganizadorId(id);
        organizadorRepository.delete(organizador);
        return OrganizadorDto.converter(organizador);
    }
}
