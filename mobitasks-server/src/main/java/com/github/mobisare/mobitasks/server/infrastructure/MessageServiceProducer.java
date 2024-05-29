package com.github.mobisare.mobitasks.server.infrastructure;

import com.github.mobisare.mobitasks.server.domain.MessageService;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.context.Dependent;
import jakarta.enterprise.inject.Produces;

@Dependent
public class MessageServiceProducer {
  
  public MessageServiceProducer(){
    // RAS
  }

  @Produces
  @ApplicationScoped
  public MessageService createMessageService() {
    return new MessageService();
  }

}
