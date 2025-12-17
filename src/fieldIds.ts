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
  
  // Section 8: FIRE PROTECTION
  s8_fire_extinguisher_type: 's8_fire_extinguisher_type',
  s8_fire_extinguisher_location: 's8_fire_extinguisher_location',
  
  // Section 11: PPE
  s11_eye_protection_when: 's11_eye_protection_when',
  s11_hearing_protection_when: 's11_hearing_protection_when',
  s11_hard_hats_when: 's11_hard_hats_when',
  s11_dust_masks_when: 's11_dust_masks_when',
  s11_safety_harness_when: 's11_safety_harness_when',
  
  // Section 12: PERMITS
  s12_hot_work_permit_work: 's12_hot_work_permit_work',
  s12_other_permit_type: 's12_other_permit_type',
  s12_other_permit_work: 's12_other_permit_work',
  
  // Section 14: WORK AREAS AND ACCESS
  s14_site_office_location: 's14_site_office_location',
  s14_work_area_access: 's14_work_area_access',
  s14_working_hours_monday_friday: 's14_working_hours_monday_friday',
  s14_working_hours_saturday: 's14_working_hours_saturday',
  s14_working_hours_sunday: 's14_working_hours_sunday',
  
  // Section 15: WASTE MANAGEMENT
  s15_waste_disposal_other: 's15_waste_disposal_other',
  
  // Section 16: PAINT STORAGE
  s16_paint_storage_procedures: 's16_paint_storage_procedures',
  s16_paint_washout_procedures: 's16_paint_washout_procedures',
  
  // Section 17: AIR QUALITY AND NOISE
  s17_noisy_works_monday_friday: 's17_noisy_works_monday_friday',
  s17_noisy_works_saturday: 's17_noisy_works_saturday',
  s17_noisy_works_sunday: 's17_noisy_works_sunday',
  s17_noisy_works_precautions: 's17_noisy_works_precautions',
  
  // Section 18: STORMWATER
  s18_stormwater_precautions: 's18_stormwater_precautions',
  
  // Section 19: HABITAT
  s19_flora_fauna_precautions: 's19_flora_fauna_precautions',
  
  // Section 20: TRAFFIC
  s20_heavy_vehicle_access: 's20_heavy_vehicle_access',
  
  // Section 21: MATERIALS HANDLING
  s21_material_deliveries_via: 's21_material_deliveries_via',
  s21_rubbish_removal_via: 's21_rubbish_removal_via',
  
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
// Note: Static content is in induction-data-static.json and rendered directly in the component
export type InductionData = {
  [K in keyof typeof FIELD_IDS]: string
}

// Helper type for site-specific data structure
export type SiteSpecificInductionData = {
  site_name?: string
  site_specific_fields: InductionData
}

