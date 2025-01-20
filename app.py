# app.py
from flask import Flask, request, render_template_string, redirect, url_for
import sqlite3
import os

app = Flask(__name__)

# Database connection (Vulnerability: Hardcoded credentials)
DB_PATH = "clothing_store.db"
SECRET_KEY = "SuperSecretKey123!"  # Hardcoded secret

# Initialize Database
def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT
        )
    """)
    c.execute("""
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            price REAL
        )
    """)
    conn.commit()
    conn.close()

@app.route('/')
def home():
    # Vulnerability: XSS (renders unsanitized user input)
    search = request.args.get('search', '')
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute(f"SELECT name, price FROM products WHERE name LIKE '%{search}%'")  # SQL Injection
    products = c.fetchall()
    conn.close()
    
    template = """
    <h1>Welcome to the Clothing Store</h1>
    <form method="get" action="/">
        <input type="text" name="search" placeholder="Search for products" value="{{ search }}">
        <button type="submit">Search</button>
    </form>
    <ul>
        {% for product in products %}
            <li>{{ product[0] }} - ${{ product[1] }}</li>
        {% endfor %}
    </ul>
    """
    return render_template_string(template, search=search, products=products)

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    # Vulnerability: Insecure File Upload
    if request.method == 'POST':
        file = request.files['file']
        file.save(os.path.join("uploads", file.filename))  # No file type validation
        return f"Uploaded {file.filename}"
    return '''
        <h1>Upload a File</h1>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="file">
            <button type="submit">Upload</button>
        </form>
    '''

@app.route('/admin', methods=['POST'])
def admin():
    # Vulnerability: Command Injection
    cmd = request.form.get('cmd')
    result = os.popen(cmd).read()  # Dangerous use of os.popen
    return f"<pre>{result}</pre>"

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
