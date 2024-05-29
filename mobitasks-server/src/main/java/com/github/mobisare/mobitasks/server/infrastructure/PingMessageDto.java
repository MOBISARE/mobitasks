package com.github.mobisare.mobitasks.server.infrastructure;

import java.time.LocalDateTime;

import jakarta.json.bind.annotation.JsonbProperty;

public class PingMessageDto {
  
  @JsonbProperty("text")
  private String message;

  @JsonbProperty("time")
  private LocalDateTime timestamp;

  public PingMessageDto() {

  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public LocalDateTime getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(LocalDateTime timestamp) {
    this.timestamp = timestamp;
  }
}
