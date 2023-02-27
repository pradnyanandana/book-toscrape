const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("build"));
app.use(cookieParser());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.post("/api/list", async (req, res) => {
    const list = req.body.list;
    console.log(list);
    // Other script
    res.status(200).json({
        success: true,
        message: "Success post list",
        data: list,
    });
});

app.post("/api/detail", async (req, res) => {
    const data = req.body.data;
    console.log(data);
    // Other script
    res.status(200).json({
        success: true,
        message: "Success post detail",
        data: data,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
