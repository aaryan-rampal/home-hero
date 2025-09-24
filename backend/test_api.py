#!/usr/bin/env python3

import requests
import json


def test_backend():
    base_url = "http://127.0.0.1:8001"

    print("Testing Home Hero Backend API...")
    print("=" * 50)

    # Test root endpoint
    try:
        response = requests.get(f"{base_url}/")
        print(f"✅ Root endpoint: {response.status_code}")
        print(f"   Response: {response.json()}")
    except Exception as e:
        print(f"❌ Root endpoint failed: {e}")
        return

    # Test health endpoint
    try:
        response = requests.get(f"{base_url}/health")
        print(f"✅ Health endpoint: {response.status_code}")
        print(f"   Response: {response.json()}")
    except Exception as e:
        print(f"❌ Health endpoint failed: {e}")

    # Test contact form submission
    test_contact = {
        "name": "John Doe",
        "email": "john@example.com",
        "country_code": "+1",
        "phone_number": "5551234567",
        "description": "I need help fixing my leaky faucet in the kitchen.",
    }

    try:
        response = requests.post(f"{base_url}/contact", json=test_contact)
        print(f"✅ Contact submission: {response.status_code}")
        print(f"   Response: {response.json()}")
    except Exception as e:
        print(f"❌ Contact submission failed: {e}")

    # Test getting all submissions
    try:
        response = requests.get(f"{base_url}/contact/submissions")
        print(f"✅ Get submissions: {response.status_code}")
        submissions = response.json()
        print(f"   Found {len(submissions)} submission(s)")
    except Exception as e:
        print(f"❌ Get submissions failed: {e}")


if __name__ == "__main__":
    test_backend()
