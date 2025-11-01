#!/bin/bash

# AdSense Setup Verification Script
# Run this to verify everything is set up correctly

DOMAIN="https://mrajan.com.np"
PUBLISHER_ID="ca-pub-4166647782860352"

echo "🔍 AdSense Setup Verification for $DOMAIN"
echo "=========================================="
echo ""

# Check ads.txt
echo "1. Checking ads.txt file..."
if curl -s -f "$DOMAIN/ads.txt" > /dev/null 2>&1; then
    echo "   ✅ ads.txt is accessible"
    ADS_CONTENT=$(curl -s "$DOMAIN/ads.txt")
    if echo "$ADS_CONTENT" | grep -q "pub-4166647782860352"; then
        echo "   ✅ Publisher ID found in ads.txt"
        echo "   Content: $ADS_CONTENT"
    else
        echo "   ⚠️  Publisher ID not found in ads.txt"
    fi
else
    echo "   ❌ ads.txt is NOT accessible (404 or error)"
fi
echo ""

# Check AdSense script on homepage
echo "2. Checking AdSense script on homepage..."
if curl -s "$DOMAIN" | grep -q "adsbygoogle"; then
    echo "   ✅ AdSense script found on homepage"
    if curl -s "$DOMAIN" | grep -q "$PUBLISHER_ID"; then
        echo "   ✅ Publisher ID found in script"
    else
        echo "   ⚠️  Publisher ID mismatch"
    fi
else
    echo "   ❌ AdSense script NOT found on homepage"
fi
echo ""

# Check Privacy Policy
echo "3. Checking Privacy Policy..."
if curl -s -f "$DOMAIN/privacy-policy/" > /dev/null 2>&1; then
    echo "   ✅ Privacy Policy page exists"
    if curl -s "$DOMAIN/privacy-policy/" | grep -qi "adsense\|google adsense"; then
        echo "   ✅ Privacy Policy mentions AdSense"
    else
        echo "   ⚠️  Privacy Policy may not mention AdSense"
    fi
else
    echo "   ❌ Privacy Policy page NOT found"
fi
echo ""

# Check Terms of Service
echo "4. Checking Terms of Service..."
if curl -s -f "$DOMAIN/terms-of-service/" > /dev/null 2>&1; then
    echo "   ✅ Terms of Service page exists"
else
    echo "   ⚠️  Terms of Service page NOT found (recommended, not required)"
fi
echo ""

# Check HTTPS
echo "5. Checking HTTPS..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN")
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✅ Site is accessible (HTTP $HTTP_CODE)"
    if echo "$DOMAIN" | grep -q "^https"; then
        echo "   ✅ Using HTTPS"
    else
        echo "   ⚠️  Not using HTTPS (should use https://)"
    fi
elif [ "$HTTP_CODE" = "000" ]; then
    echo "   ❌ Site is NOT accessible (connection failed)"
    echo "   This might mean the site hasn't been deployed yet or domain isn't configured"
else
    echo "   ⚠️  Site returned HTTP $HTTP_CODE"
fi
echo ""

# Check blog post for AdSense
echo "6. Checking AdSense on blog post..."
if curl -s "$DOMAIN/posts/2023-07-11-ssg-vs-ssr/" | grep -q "adsbygoogle"; then
    echo "   ✅ AdSense script found on blog post"
else
    echo "   ⚠️  AdSense script not found on blog post"
fi
echo ""

echo "=========================================="
echo "✅ Verification Complete!"
echo ""
echo "Next Steps:"
echo "- Check AdSense dashboard daily for status updates"
echo "- Ensure site remains accessible"
echo "- Don't click your own ads!"
echo "- Be patient (review takes 2-4 weeks)"

