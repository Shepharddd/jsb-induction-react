// Field ID constants for induction content
// Each field has a unique identifier following the pattern: s{section}_{descriptive_name}
export const FIELD_IDS = {
  // Section 1: SITE CONDITIONS
  s1_during_construction: 's1_during_construction',
  s1_occupied_precautions: 's1_occupied_precautions',
  
  // Section 2: CLIENT REQUIREMENTS
  s2_client_issues: 's2_client_issues',
  
  // Section 3: FIRST AID
  s3_first_aid_officer_name: 's3_first_aid_officer_name',
  s3_first_aid_officer_phone: 's3_first_aid_officer_phone',
  s3_backup_first_aid_officer_name: 's3_backup_first_aid_officer_name',
  s3_backup_first_aid_officer_phone: 's3_backup_first_aid_officer_phone',
  s3_medical_centre_name: 's3_medical_centre_name',
  s3_medical_centre_phone: 's3_medical_centre_phone',
  s3_medical_centre_address: 's3_medical_centre_address',
  s3_hospital_name: 's3_hospital_name',
  s3_hospital_phone: 's3_hospital_phone',
  s3_hospital_address: 's3_hospital_address',
  s3_ambulance_access: 's3_ambulance_access',
  s3_ambulance_precautions: 's3_ambulance_precautions',
  s3_first_aid_kit_type: 's3_first_aid_kit_type',
  s3_first_aid_kit_location: 's3_first_aid_kit_location',
  
  // Section 4: EMERGENCY AND EVACUATION
  s4_emergency_contact1_name: 's4_emergency_contact1_name',
  s4_emergency_contact1_phone: 's4_emergency_contact1_phone',
  s4_emergency_contact2_name: 's4_emergency_contact2_name',
  s4_emergency_contact2_phone: 's4_emergency_contact2_phone',
  s4_epa_contact_name: 's4_epa_contact_name',
  s4_epa_contact_phone: 's4_epa_contact_phone',
  s4_evacuation_route: 's4_evacuation_route',
  s4_assembly_area_location: 's4_assembly_area_location',
  
  // Section 14: WORK AREAS AND ACCESS
  s14_site_office_location: 's14_site_office_location',
  s14_work_area_access: 's14_work_area_access',
  s14_working_hours_monday_friday: 's14_working_hours_monday_friday',
  s14_working_hours_saturday: 's14_working_hours_saturday',
  s14_working_hours_sunday: 's14_working_hours_sunday',
  
  // Section 20: TRAFFIC
  s20_heavy_vehicle_access: 's20_heavy_vehicle_access',
  
  // Section 22: AMENITIES
  s22_parking_arrangements: 's22_parking_arrangements',
  s22_amenities_location: 's22_amenities_location',
  s22_toilets_location: 's22_toilets_location',
  s22_drilling_noisy_hours: 's22_drilling_noisy_hours',
  
  // Section 23: SITE SPECIFIC CONTROL
  s23_project_manager_name: 's23_project_manager_name',
  s23_project_manager_date: 's23_project_manager_date',
  s23_site_manager_name: 's23_site_manager_name',
  s23_site_manager_date: 's23_site_manager_date',
} as const

// Type for induction data (site-specific only)
// Note: Static content is rendered directly in the InductionContent component
export type InductionData = {
  [K in keyof typeof FIELD_IDS]: string
}

// Helper type for site-specific data structure
export type SiteSpecificInductionData = {
  site_name?: string
  site_specific_fields: InductionData
}

// Mapping from descriptive field IDs to numeric field IDs used in JSON
// This allows the code to use descriptive names while the JSON uses simple numeric IDs
export const FIELD_ID_MAPPING: Record<keyof typeof FIELD_IDS, string> = {
  // Section 1: SITE CONDITIONS
  s1_during_construction: 's1_1',
  s1_occupied_precautions: 's1_2',
  
  // Section 2: CLIENT REQUIREMENTS
  s2_client_issues: 's2_1',
  
  // Section 3: FIRST AID
  s3_first_aid_officer_name: 's3_1',
  s3_first_aid_officer_phone: 's3_2',
  s3_backup_first_aid_officer_name: 's3_3',
  s3_backup_first_aid_officer_phone: 's3_4',
  s3_medical_centre_name: 's3_5',
  s3_medical_centre_phone: 's3_6',
  s3_medical_centre_address: 's3_7',
  s3_hospital_name: 's3_8',
  s3_hospital_phone: 's3_9',
  s3_hospital_address: 's3_10',
  s3_ambulance_access: 's3_11',
  s3_ambulance_precautions: 's3_12',
  s3_first_aid_kit_type: 's3_13',
  s3_first_aid_kit_location: 's3_14',
  
  // Section 4: EMERGENCY AND EVACUATION
  s4_emergency_contact1_name: 's4_1',
  s4_emergency_contact1_phone: 's4_2',
  s4_emergency_contact2_name: 's4_3',
  s4_emergency_contact2_phone: 's4_4',
  s4_epa_contact_name: 's4_5',
  s4_epa_contact_phone: 's4_6',
  s4_evacuation_route: 's4_7',
  s4_assembly_area_location: 's4_8',
  
  // Section 14: WORK AREAS AND ACCESS
  s14_site_office_location: 's14_1',
  s14_work_area_access: 's14_2',
  s14_working_hours_monday_friday: 's14_3',
  s14_working_hours_saturday: 's14_4',
  s14_working_hours_sunday: 's14_5',
  
  // Section 20: TRAFFIC
  s20_heavy_vehicle_access: 's20_1',
  
  // Section 22: AMENITIES
  s22_parking_arrangements: 's22_1',
  s22_amenities_location: 's22_2',
  s22_toilets_location: 's22_3',
  s22_drilling_noisy_hours: 's22_4',
  
  // Section 23: SITE SPECIFIC CONTROL
  s23_project_manager_name: 's23_1',
  s23_project_manager_date: 's23_2',
  s23_site_manager_name: 's23_3',
  s23_site_manager_date: 's23_4',
} as const

// Helper function to get the numeric field ID from a descriptive field ID
export function getNumericFieldId(descriptiveFieldId: keyof typeof FIELD_IDS): string {
  return FIELD_ID_MAPPING[descriptiveFieldId] || descriptiveFieldId
}

// Mapping from external data keys to field IDs
// This maps the keys from external data sources (e.g., API responses) to our internal field IDs
// 
// NOTE: Some mappings below are marked with "TODO" or "PLACEHOLDER" - these need to be reviewed
// and matched to the correct field IDs or new field IDs may need to be created.
export const EXTERNAL_DATA_KEY_MAPPING: Record<string, keyof typeof FIELD_IDS> = {
  // Section 1: SITE CONDITIONS
  'during_construction_the_site_will_be': 's1_during_construction',
  'if_site_is_occupied_or_partly_occupied_please_note_precautions_as_follows': 's1_occupied_precautions',
  
  // Section 2: CLIENT REQUIREMENTS
  'the_following_issues_have_been_identified_as_important_to_the_client_please_take_note': 's2_client_issues',
  
  // Section 3: FIRST AID
  'nominated_first_aid_officer': 's3_first_aid_officer_name',
  'phone_no': 's3_first_aid_officer_phone', // TODO: May need separate mappings for first aid officer vs medical centre phone
  'backup_first_aid_officer': 's3_backup_first_aid_officer_name',
  // TODO: s3_backup_first_aid_officer_phone - no external key mapped yet
  'name': 's3_medical_centre_name',
  // TODO: s3_medical_centre_phone - no external key mapped yet
  'address': 's3_medical_centre_address',
  // TODO: s3_hospital_name - no external key mapped yet
  // TODO: s3_hospital_phone - no external key mapped yet
  // TODO: s3_hospital_address - no external key mapped yet
  'is_ambulance_access_possible': 's3_ambulance_access',
  'if_no_what_precautions_are_required': 's3_ambulance_precautions',
  'first_aid_kit_specify_typeno': 's3_first_aid_kit_type',
  'location': 's3_first_aid_kit_location',
  
  // Section 4: EMERGENCY AND EVACUATION
  // TODO: s4_emergency_contact1_name - no external key mapped yet
  // TODO: s4_emergency_contact1_phone - no external key mapped yet
  // TODO: s4_emergency_contact2_name - no external key mapped yet
  // TODO: s4_emergency_contact2_phone - no external key mapped yet
  // TODO: s4_epa_contact_name - no external key mapped yet (only phone is mapped)
  'epa_contact_or_equivalent_authority': 's4_epa_contact_phone',
  // TODO: s4_evacuation_route - no external key mapped yet
  // TODO: s4_assembly_area_location - no external key mapped yet
  
  // Section 14: WORK AREAS AND ACCESS
  'the_site_office_is_located': 's14_site_office_location',
  'access_to_the_work_area_is_via': 's14_work_area_access',
  'monday_to_friday': 's14_working_hours_monday_friday',
  'saturday': 's14_working_hours_saturday',
  'sunday': 's14_working_hours_sunday',
  
  // Section 20: TRAFFIC
  'heavy_vehicle_access_shall_be_via': 's20_heavy_vehicle_access',
  'material_deliveries_shall_be_via': 's20_heavy_vehicle_access', // PLACEHOLDER: May need separate field ID for material deliveries
  'subcontractors_rubbish_and_debris_shall_be_removed_via': 's20_heavy_vehicle_access', // PLACEHOLDER: May need separate field ID
  
  // Section 22: AMENITIES
  'parking_arrangements_are_as_follows': 's22_parking_arrangements',
  'the_amenities_area_is_located': 's22_amenities_location',
  'workers_on_site_are_to_use_toilets_in_the_following_locations': 's22_toilets_location',
  'drilling_or_other_noisy_works_shall_be_carried_out_between_the_following_hours': 's22_drilling_noisy_hours',
  'other_precautions_relating_to_noisy_works_are_as_follows': 's22_drilling_noisy_hours', // PLACEHOLDER: May need separate field ID
  
  // Section 23: SITE SPECIFIC CONTROL
  'project_manager': 's23_project_manager_name',
  'project_manager_date': 's23_project_manager_date',
  'site_manager': 's23_site_manager_name',
  'site_manager_date': 's23_site_manager_date',
  'permit_type': 's23_project_manager_name', // PLACEHOLDER: May need separate field ID for permit type
  'work': 's23_project_manager_name', // PLACEHOLDER: May need separate field ID for work type
  
  // UNMAPPED EXTERNAL KEYS - These need field IDs created or matched to existing ones:
  // These keys from external data don't have corresponding field IDs yet - add to FIELD_IDS if needed
  'a_hot_work_permit_must_be_issued_by_the_site_manager_before_the_following_work_can_commence_on_site': 's23_project_manager_name', // PLACEHOLDER: Needs dedicated field ID
  'dust_masks_used_when': 's3_first_aid_kit_type', // PLACEHOLDER: PPE field - needs dedicated field ID
  'eye_protection_used_when': 's3_first_aid_kit_type', // PLACEHOLDER: PPE field - needs dedicated field ID
  'hard_hats_used_when': 's3_first_aid_kit_type', // PLACEHOLDER: PPE field - needs dedicated field ID
  'hearing_protection_used_when': 's3_first_aid_kit_type', // PLACEHOLDER: PPE field - needs dedicated field ID
  'safety_harness_used_when': 's3_first_aid_kit_type', // PLACEHOLDER: PPE field - needs dedicated field ID
  'other_details': 's2_client_issues', // PLACEHOLDER: Generic field - may need dedicated field ID
  'other_precautions_relating_to_stormwater_sedimentation_and_concrete_waste_include': 's2_client_issues', // PLACEHOLDER: Needs dedicated field ID
  'specific_paint_washout_procedures_for_this_project_are': 's2_client_issues', // PLACEHOLDER: Needs dedicated field ID
  'the_following_precautions_relating_to_the_protection_of_florafauna_shall_apply_on_this_site': 's2_client_issues', // PLACEHOLDER: Needs dedicated field ID
  'the_storage_procedures_for_paint_on_this_project_are': 's2_client_issues', // PLACEHOLDER: Needs dedicated field ID
  'type': 's3_first_aid_kit_type', // PLACEHOLDER: Generic "type" field - needs context-specific field ID
} as const

// Type for external data structure (raw data from API/external source)
export type ExternalInductionData = Record<string, string>

/**
 * Maps external data keys to field IDs and returns a properly structured InductionData object
 * @param externalData - Raw data object with external keys (e.g., from API)
 * @returns Partial record with mapped field IDs as keys, only including fields that have mappings
 */
export function mapExternalDataToFieldIds(
  externalData: ExternalInductionData
): Partial<Record<keyof typeof FIELD_IDS, string>> {
  const mappedData: Partial<Record<keyof typeof FIELD_IDS, string>> = {}
  
  for (const [externalKey, value] of Object.entries(externalData)) {
    const fieldId = EXTERNAL_DATA_KEY_MAPPING[externalKey]
    if (fieldId) {
      mappedData[fieldId] = value
    }
  }
  
  return mappedData
}

// ============================================================================
// MAPPING STATUS SUMMARY
// ============================================================================
// 
// FIELD IDs WITHOUT EXTERNAL KEY MAPPINGS (need external keys to map to these):
// - s3_backup_first_aid_officer_phone
// - s3_medical_centre_phone
// - s3_hospital_name
// - s3_hospital_phone
// - s3_hospital_address
// - s4_emergency_contact1_name
// - s4_emergency_contact1_phone
// - s4_emergency_contact2_name
// - s4_emergency_contact2_phone
// - s4_epa_contact_name
// - s4_evacuation_route
// - s4_assembly_area_location
//
// EXTERNAL KEYS WITH PLACEHOLDER MAPPINGS (need proper field IDs created/matched):
// - a_hot_work_permit_must_be_issued_by_the_site_manager_before_the_following_work_can_commence_on_site
// - dust_masks_used_when (PPE - needs dedicated field ID)
// - eye_protection_used_when (PPE - needs dedicated field ID)
// - hard_hats_used_when (PPE - needs dedicated field ID)
// - hearing_protection_used_when (PPE - needs dedicated field ID)
// - safety_harness_used_when (PPE - needs dedicated field ID)
// - material_deliveries_shall_be_via (may need separate field ID from heavy_vehicle_access)
// - subcontractors_rubbish_and_debris_shall_be_removed_via (may need separate field ID)
// - other_details
// - other_precautions_relating_to_noisy_works_are_as_follows (may need separate field ID)
// - other_precautions_relating_to_stormwater_sedimentation_and_concrete_waste_include
// - permit_type
// - specific_paint_washout_procedures_for_this_project_are
// - the_following_precautions_relating_to_the_protection_of_florafauna_shall_apply_on_this_site
// - the_storage_procedures_for_paint_on_this_project_are
// - type (generic - needs context-specific field ID)
// - work (generic - needs context-specific field ID)
//
// ============================================================================

