<!-- Start SDK Example Usage -->


```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddAddressResponse, AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: AddAddressSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.account.addAddress({
  idempotencyKey: "corrupti",
  xPublishableKey: "provident",
  addressAccount: {
    company: "Bolt",
    country: "United States",
    countryCode: "US",
    default: false,
    doorCode: "123456",
    email: "alan.watts@example.com",
    firstName: "Alan",
    lastName: "Watts",
    locality: "Brooklyn",
    metadata: {
      additionalProperties: "distinctio",
    },
    name: "Alan Watts",
    phone: "+12125550199",
    postalCode: "10044",
    region: "NY",
    regionCode: "NY",
    streetAddress1: "888 main street",
    streetAddress2: "apt 3021",
    streetAddress3: "c/o Alicia Watts",
    streetAddress4: "Bridge Street Apartment Building B",
  },
}, operationSecurity).then((res: AddAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->