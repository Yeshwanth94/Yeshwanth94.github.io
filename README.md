**Local Build**

To run the template locally, you'll have to install `bundle`

Then, run `bundle install` to install gems

To preview the website, run `bundle exec jekyll serve`

Run `buncle exec jekyll clean` to clear contents of the build

Whenever you modify `_config.yml` you need to rerun the `jekyll serve` command. If you're only modifying the layout `default.html` or any of the content files like `about_me.md` or `bibliography.yml` the preview will live reload.

**Usage**

- Site title: `_config.yml/title`
- Site tagline or subtitle i.e. Postdoc...: `_config.yml/tagline`
- About me section: `_includes/about_me.md`
- Resume: `_config.yml/resume` (checks within `/assets/pdfs/`)
- You can modify whether you show other publications (sans selected) or all publications by setting `_config.yml/other_publications` to `true` or `false` resp (default: `false`)
- You can collapse the other publications section by setting `_config.yml/collapse_publications` to `true` (default: `false`)

**Publications**

To add a publication, add its details to `_data/bibliography.yml`. Some specific tags:
- `under_sub`: Under submission
- `under_prep`: Under preparation
- `under_major_rev`: Under major revision
- `abbr`: Controls the venue publication tag
- `note`: Used to annotate publication, for instance "Spotlight Publication" or "Invited to SICOMP Special Issue for FOCS 2023"
- `selected`: Include in the "Selected Publications" section

Pay special attention to how math is rendered in the abstract

Publications show up in the same order as they are in the `bibliography.yml` file


