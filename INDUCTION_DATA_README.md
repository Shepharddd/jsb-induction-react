# Site Induction Data Structure

The induction data has been split into two sections for better management:

## 1. Static Data (`induction-data-static.json`)

Contains **general safety rules and procedures** that do NOT change from site to site. This includes:

- General safety rules (Section 5)
- Electrical safety rules (Section 6)
- Working at height rules (Section 7)
- Fire protection rules (Section 8 - general rules; site-specific: fire extinguisher types and locations)
- Hazardous substances rules (Section 9)
- Plant and equipment rules (Section 10)
- General PPE rules (Section 11 - general rules; site-specific: conditions for when PPE is required)
- General permit requirements (Section 12 - general rules; site-specific: work requiring permits)
- General rules (Section 13)
- Waste management procedures (Section 15 - general procedures; site-specific: waste disposal details)
- Paint storage and disposal rules (Section 16 - general rules; site-specific: paint storage and washout procedures)
- Air quality and noise management rules (Section 17 - general rules; site-specific: noisy works times and precautions)
- Stormwater management rules (Section 18 - general rules; site-specific: stormwater precautions)
- Habitat conservation rules (Section 19 - general rules; site-specific: flora/fauna protection measures)
- Materials handling rules (Section 21 - general rules; site-specific: material delivery routes, rubbish removal routes)
- Amenities and behavior rules (Section 22 - general rules; site-specific: parking, amenities locations, etc.)
- Standard evacuation procedures (Section 4 - standard procedure)

**Note:** This file is updated only when company-wide policies or regulations change.

## 2. Site-Specific Data (`induction-data-site-specific.json`)

Contains **information that changes from site to site**. This includes:

### Section 1: Site Conditions
- Site occupancy status
- Occupied site precautions

### Section 2: Client Requirements
- Client-specific concerns and requirements

### Section 3: First Aid
- First aid officer names and phone numbers
- Medical centre/hospital details
- Ambulance access information
- First aid kit locations

### Section 4: Emergency and Evacuation
- Emergency contact details (site-specific)
- EPA contact information

### Section 14: Work Areas and Access
- Site office location
- Access routes
- Working hours

### Section 20: Traffic
- Heavy vehicle access routes

### Section 22: Amenities
- Parking arrangements
- Amenities locations
- Toilet locations
- Noisy works hours

### Section 23: Site Specific Control
- Project Manager name and date
- Site Manager name and date

**Note:** This file must be filled out for each individual site.

## Usage

### For Backend/API:

When fetching induction data, combine both files:

```javascript
// Pseudo-code example
const staticData = require('./induction-data-static.json');
const siteSpecificData = require('./induction-data-site-specific.json');

// For the React component, only the site-specific fields are needed
// as the static content is hardcoded in the component
const inductionData = siteSpecificData.site_specific_fields;
```

### For Frontend:

The React component (`InductionContent.tsx`) uses only the site-specific fields. The static content is rendered directly in the component.

The component expects data in this format:
```json
{
  "s1_during_construction": "value",
  "s3_first_aid_officer_name": "value",
  ...
}
```

### Example Files:

- `induction-data-site-specific-example.json` - Example with sample data filled in
- `induction-data-static.json` - Contains all static rules (read-only for most users)

## Field IDs

All field IDs follow the pattern: `s{section_number}_{descriptive_name}`

For example:
- `s1_during_construction` - Section 1, "during construction" field
- `s3_first_aid_officer_name` - Section 3, first aid officer name field

See `src/fieldIds.ts` for the complete list of field IDs.

## Schema Validation

The original schema file (`induction-data-schema.json`) still validates the complete structure but can be updated to reflect this split if needed.



