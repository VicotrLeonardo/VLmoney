import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: "1",
          titulo: "Freelance de Website",
          tipo: "deposit",
          categoria: "Dev",
          amount: 6000,
          createdAt: "2022-02-04",
        },

        {
          id: "2",
          titulo: "Aluguel",
          tipo: "withdraw",
          categoria: "Casa",
          amount: 950,
          createdAt: "2022-02-04",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
