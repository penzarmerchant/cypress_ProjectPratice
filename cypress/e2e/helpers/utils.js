const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

const generateMockData = () => {
  const mockData = {
    accountdetails: [
      faker.company.name(),
      faker.internet.domainName(),
      faker.internet.email(),
      faker.phone.number(),
      faker.location.streetAddress(),
      "Paris",
      faker.location.county(),
      faker.location.zipCode(),
      faker.location.country(),
      "Investor",
      "Banking",
      "This is an automated test",
      "Jack Adams",
      "Sales"
    ]
  }
  const filePath = path.join(__dirname, '../../fixtures/espoCRMAccounts.json');
  fs.writeFileSync(filePath, JSON.stringify(mockData, null, 2), 'utf-8');
  return null;
}

module.exports = { generateMockData }