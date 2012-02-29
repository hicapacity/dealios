this.manifest = {
    "name": "Dealios",
    "icon": "../images/dealios48.png",
    "settings": [
        {
            "tab": i18n.get("feed"),
            "group": i18n.get("location"),
            "name": "dealios-location-desc",
            "type": "description",
            "text": i18n.get("location-description"),
        },
        {
            "tab": i18n.get("feed"),
            "group": i18n.get("location"),
            "name": "dealios-location",
            "type": "popupButton",
            "label": i18n.get("location-label"),
            "options": {
                "values": [
                    {
                        "value": "chicago",
                        "text": "Chicago, IL",
                    },
                    {
                        "value": "honolulu",
                        "text": "Honolulu, HI",
                    },
                    {
                        "value": "dc",
                        "text": "Washington, DC",
                    }
                ],
            },
        },
    ],
};
