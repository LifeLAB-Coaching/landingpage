import urllib.request
import re
import json

queries = {
    "kathmandu-patan": "kathmandu durbar square",
    "bhaktapur": "bhaktapur",
    "stupas": "boudhanath stupa",
    "food-tour": "momo dumplings nepal",
    "nagarkot-day": "himalayas mountains nepal",
    "nagarkot-overnight": "himalayas sunset",
    "trishuli-beer": "river rafting nepal"
}

results = {}

for key, query in queries.items():
    url = f"https://unsplash.com/s/photos/{query.replace(' ', '-')}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # find images.unsplash.com/photo-XXX
        ids = re.findall(r'images\.unsplash\.com/photo-([0-9a-fA-F\-]+)\?', html)
        if ids:
            # take the first valid looking one that isn't a profile pic (usually longer)
            valid_ids = [i for i in ids if len(i) > 10]
            if valid_ids:
                results[key] = valid_ids[0]
            else:
                results[key] = ids[0]
        else:
            results[key] = "NOT_FOUND"
    except Exception as e:
        results[key] = str(e)

print(json.dumps(results, indent=2))
