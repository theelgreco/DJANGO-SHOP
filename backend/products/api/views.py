from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from products.api.serializers import ProductSerializer
from products.models import Product


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    pagination_class = PageNumberPagination
