from django.contrib.postgres.fields import ArrayField
from django.db import models

count = 0


class Product(models.Model):
    price = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    images = ArrayField(models.ImageField(upload_to='products'), null=True, blank=True)
    quantity = models.PositiveIntegerField(null=True, blank=True)
    is_letter_sizing = models.BooleanField(default=True)
    sizes_letter = models.CharField(
        choices=(('S', 'Small'), ('M', 'Medium'), ('L', 'Large'), ('XL', 'Extra Large')),
        max_length=2,
        null=True, blank=True
    )
    sizes_number = models.DecimalField(
        max_digits=3, decimal_places=1, null=True, blank=True,
        help_text="Numeric sizes: 1.0, 1.5, 2.0, etc."
    )
