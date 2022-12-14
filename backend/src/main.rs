mod presentation;

use actix_web::{web, App, HttpServer};
use presentation::purpose::index::hello;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(web::scope("/purpose").service(hello)))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}
