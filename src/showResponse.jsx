function showResponse (response) {
            RESPONSE = response;
            if (this && this.url && (typeof(this.url) == "string")) {
                var anchor = jQuery("#url");
                anchor.text(this.url.toString());
                anchor.attr('href', this.url.toString());
            }
            jQuery("#output").text(JSON.stringify(response, null, '  '));
        }