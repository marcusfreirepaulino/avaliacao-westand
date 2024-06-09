SELECT DISTINCT c.*
FROM Customers c
JOIN Orders o ON c.id = o.customer_id
WHERE o.order_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH);
