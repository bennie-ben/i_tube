import app from "./app";
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const handleListening = () => {
    console.log(`Listening On : http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

