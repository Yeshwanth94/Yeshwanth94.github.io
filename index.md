{% include about_me.md %}

<div class="footnote">
<span class="show-footnote-trigger">[1]</span>
<div class="footnote-content" style="display: none;">
{{ "### Selected Publications" | markdownify }}
{% include selected-publications.liquid %}
<button class="show-abstract-btn"></button>
<div class="abstract-content" style="display: none;">
  {{ "Hello There" }}
</div>
</div>
</div>

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
