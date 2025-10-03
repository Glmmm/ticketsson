package br.com.seguranca.server.controller;

import br.com.seguranca.server.dto.ReservasDTO;
import br.com.seguranca.server.service.ReservasService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/reservas")
public class ReservasController {

    private final ReservasService reservasService;

    public ReservasController(ReservasService reservasService) {
        this.reservasService = reservasService;
    }

    @PostMapping
    public ResponseEntity<ReservasDTO> criarReserva(@RequestBody @Valid ReservasDTO requestDTO) {
        ReservasDTO responseDTO = reservasService.criar(requestDTO);
        
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReservasDTO> buscarReservaPorId(@PathVariable Long id) {
        ReservasDTO responseDTO = reservasService.buscarPorId(id);
        
        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping
    public ResponseEntity<List<ReservasDTO>> listarTodasReservas() {
        List<ReservasDTO> reservas = reservasService.listarTodos();
        
        return ResponseEntity.ok(reservas);
    }
    
     @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<ReservasDTO>> listarReservasPorUsuario(
            @PathVariable Long usuarioId) {
        
        List<ReservasDTO> reservas = reservasService.listarPorUsuarioId(usuarioId);
        
        return ResponseEntity.ok(reservas);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarReserva(@PathVariable Long id) {
        reservasService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}