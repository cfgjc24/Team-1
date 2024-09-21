import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import platform

def get_os():
    os_name = platform.system()
    if os_name == "Windows":
        return "Windows"
    elif os_name == "Darwin":
        return "macOS"
    else:
        return "Other OS"

# Use a service account.
OS = get_os()
if OS == "Windows":
    cred = credentials.Certificate('..\\..\\firestore_credentials.json')
else:
    cred = credentials.Certificate('../../firestore_credentials.json')


app = firebase_admin.initialize_app(cred)

db = firestore.client()