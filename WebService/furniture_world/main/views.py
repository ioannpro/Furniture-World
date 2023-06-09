from django.shortcuts import render

# Create your views here.

def main_page(request):

    menu = [
        {
            'name': 'hg',
            'maxprice': '',
            'subcategory': ''
        },
        {
            'name': 'g',
            'maxprice': '',
            'subcategory': ''
        },
    ]

    dict = {
        'title': 'Главная страница',
        'menu': menu
        }

    return render(request, 'main/index.html', dict)

def product_page(request):

    img = [
        "https://delavega.ua/image/catalog/catalog/Sofas/sofa%20A111/1938_782-a111-new-1.jpg",
        "https://delavega.ua/image/catalog/catalog/Sofas/sofa%20A111/a111-1938_782-117.jpg"
        ]

    dict = {
        'title': 'Главная страница',
        'id': 111111,
        'img': img,
        'l_img': range(len(img)),
        'name': 'Name of the sofa',
        'description': 'This elegant sofa is the perfect addition to any living room. With its sleek design and plush cushions, it offers both comfort and style. The high-quality upholstery is both durable and easy to clean, making it a practical choice for families with children or pets. The sturdy frame is made from solid wood, ensuring that this sofa will last for years to come.',
        'price': '$399',
    }

    return render(request, 'main/product.html', dict)