// Đoạn mã này tự động sửa câu trả lời của Locket thành tài khoản Premium
let body = $response.body;
if (body) {
    let obj = JSON.parse(body);
    if (obj.subscriber) {
        // Kích hoạt gói Gold vĩnh viễn đến năm 2099
        obj.subscriber.subscriptions = {
            "locket_gold_yearly": {
                "expires_date": "2099-12-31T23:59:59Z",
                "original_purchase_date": "2026-01-01T00:00:00Z",
                "purchase_date": "2026-01-01T00:00:00Z"
            }
        };
        obj.subscriber.entitlements = {
            "Gold": {
                "expires_date": "2099-12-31T23:59:59Z",
                "product_identifier": "locket_gold_yearly",
                "purchase_date": "2026-01-01T00:00:00Z"
            }
        };
    }
    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
