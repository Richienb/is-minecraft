"use strict"

module.exports = () => typeof client === "object" &&
    typeof client.registerSystem === "function" &&
    typeof server === "object" &&
    typeof server.registerSystem === "function"
