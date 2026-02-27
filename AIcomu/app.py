from flask import Flask, render_template

app = Flask(__name__)

# ① トップ
@app.route("/")
def top():
    return render_template("index.html")
# ② 体験
@app.route("/experience")
def experience():
    return render_template("experience.html")
# ③ 本番（AIコミュ）
@app.route("/aicomu")
def aicomu():
    return render_template("aicomu.html")


if __name__ == "__main__":
    app.run(debug=True, port=5000)

