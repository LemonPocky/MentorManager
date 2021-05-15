'use strict';
/**
 * Base class for commands
 */
module.exports = class Command {
  constructor (client, options = {}) {
    this.client = client;

    this.name = options.name;
    this.description = options.description;
    this.aliases = options.aliases;
    this.applicationType = options.applicationType;
    this.cooldown = options.cooldown;
    this.usage = options.usage;

  }

  /**
   * Executes command
   */
  async execute () {

  }

};