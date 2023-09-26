const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html style="
    width: 99%;
    height: 99%;
"><head></head><body style="
    width: 100%;
    height: 100%;
">
    <section style="
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #121212;
    color: whitesmoke;
    font-size: xx-large;
">
      Hello from Ibrahim Bashandy Server
    </section>
</body>
</html>
`
