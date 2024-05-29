package com.github.mobisare.mobitasks.server.domain;

public class MessageService {

  
  public MessageService() {

  }

  public PingMessage execute() {
    return new PingMessage("Hello world !");
  }
}
