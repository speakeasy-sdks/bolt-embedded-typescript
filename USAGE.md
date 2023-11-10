<!-- Start SDK Example Usage -->
```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async () => {
    const sdk = new BoltEmbeddedApi();
    const operationSecurity: AddAddressSecurity = {
        oAuth: "",
        xAPIKey: "",
    };

    const res = await sdk.account.addAddress(
        {
            addressAccount: {
                company: "Bolt",
                country: "United States",
                countryCode: "US",
                doorCode: "123456",
                email: "alan.watts@example.com",
                firstName: "Alan",
                lastName: "Watts",
                locality: "Brooklyn",
                metadata: {},
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
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->