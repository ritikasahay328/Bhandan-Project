"""Simple static file server for the Bandhan website."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os

HOST = "0.0.0.0"
PORT = int(os.getenv("PORT", "4173"))


def run() -> None:
    server = ThreadingHTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
    print(f"Bandhan site running at http://localhost:{PORT}")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
    finally:
        server.server_close()


if __name__ == "__main__":
    run()
