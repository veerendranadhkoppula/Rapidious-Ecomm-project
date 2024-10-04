import os
import json
from opensearchpy import OpenSearch
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Set up OpenSearch client
host = os.getenv('OPENSEARCH_HOST')
port = os.getenv('OPENSEARCH_PORT')
username = os.getenv('OPENSEARCH_USERNAME')
password = os.getenv('OPENSEARCH_PASSWORD')

client = OpenSearch(
    hosts=[{'host': host, 'port': port}],
    http_auth=(username, password),
    use_ssl=True,
)

# Load dataset and index
def load_data(file_path):
    with open(file_path) as f:
        recipes = json.load(f)
        for recipe in recipes:
            client.index(index='epirecipes', body=recipe)

if __name__ == "__main__":
    dataset_path = '../data/epirecipes/recipes.json'  # Adjust the path as necessary
    load_data(dataset_path)
