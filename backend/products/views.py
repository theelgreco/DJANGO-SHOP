from django.views.generic import TemplateView


class AllProductsView(TemplateView):
    template_name = 'vue_template.html'

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)

        context_data['page_dict'] = {
            'vue_file_name': 'all_products',
            'page_title': 'Products'
        }

        return context_data
