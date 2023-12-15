from rest_framework.viewsets import ModelViewSet

from products.api.serializers import ProductSerializer
from products.models import Product


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()