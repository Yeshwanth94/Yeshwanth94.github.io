{% include about_me.md %}


### Selected Publications
{% include selected-publications.liquid %}

{% if site.collapse_publications %}
<h3 class="collapsible-heading">
{% if site.other_publications %} More {% else %} All {% endif %}Publications <span class="arrow"></span></h3>
<div class="collapsible-content">
{% include publications.liquid %}
</div>
{% else %}
### Publications
{% include publications.liquid %}
{% endif %}
