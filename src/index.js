

export async function handler(event, context){
  const fakeCrmData = [{
    clientName: "Starbucks",
    relevant: 0,
    keywords: ["Coffee", "Breakfast", "Tea", "Starbucks"]
  },
  {clientName: "McDonalds",
  relevant: 2,
  keywords: ["Burger", "Fries", "Ketchup", "Lunch", "Dinner", "Breakfast", "BigMac"]}];
  return Promise.resolve({
    statusCode: 200,
    body: JSON.stringify({
    msg: fakeCrmData}),
  });
}
