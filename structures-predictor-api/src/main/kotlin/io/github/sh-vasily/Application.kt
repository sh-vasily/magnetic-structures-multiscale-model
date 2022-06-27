package io.github.sh-vasily

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.github.sh-vasily.plugins.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureHTTP()
        configureRouting()
    }.start(wait = true)
}
