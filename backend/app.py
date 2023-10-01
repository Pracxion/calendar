from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host="redis", port=6379)


@app.route("/api", methods=["GET"])
def index():
    redis.incr("hits")
    return {"hits": f'{redis.get("hits")}'}


if __name__ == "__main__":
    app.run()

