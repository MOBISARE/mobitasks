package com.github.mobisare.mobitasks.server.infrastructure;

import java.time.LocalDateTime;

import com.github.mobisare.mobitasks.server.domain.MessageService;
import com.github.mobisare.mobitasks.server.domain.PingMessage;

import io.quarkus.logging.Log;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/ping")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PingResource {

  
  private final MessageService service;

  @Inject
  public PingResource(final MessageService service) {
    this.service = service;
  }

  @GET
  public PingMessageDto ping(){
    PingMessage pingMessage = this.service.execute();
    PingMessageDto dto = new PingMessageDto();
    dto.setMessage(pingMessage.value());
    dto.setTimestamp(LocalDateTime.now());;
    return dto;
  }

  @POST
  public void takeMessage(PingMessage message){
    Log.info(message);
  }
  
}
