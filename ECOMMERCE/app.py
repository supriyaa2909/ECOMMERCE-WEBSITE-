from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ecommerce.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Models
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Routes
@app.route('/')
def home():
    return render_template('products.html')

@app.route('/api/products')
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'description': p.description,
        'price': p.price,
        'image': p.image
    } for p in products])

# Initialize database
def init_db():
    with app.app_context():
        db.create_all()
        
        # Add sample products if none exist
        if Product.query.count() == 0:
            sample_products = [
                {
                    'name': 'Wireless Headphones',
                    'description': 'High-quality wireless headphones with noise cancellation',
                    'price': 199.99,
                    'image': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
                },
                {
                    'name': 'Smart Watch',
                    'description': 'Feature-rich smartwatch with health tracking',
                    'price': 299.99,
                    'image': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
                },
                {
                    'name': 'Laptop Backpack',
                    'description': 'Durable laptop backpack with multiple compartments',
                    'price': 79.99,
                    'image': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62'
                }
            ]
            
            for product_data in sample_products:
                product = Product(**product_data)
                db.session.add(product)
            
            db.session.commit()

if __name__ == '__main__':
    init_db()
    app.run(debug=True)