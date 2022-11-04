export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    ActionCount: unknown;
    AreaOfEffectTypeFilter: unknown;
    FloatFilter: unknown;
    IntFilter: unknown;
    LanguageScriptFilter: unknown;
    MonsterSubtypeFilter: unknown;
    MonsterTypeFilter: unknown;
    ProficiencyTypeFilter: unknown;
    SizeFilter: unknown;
    SpellAttackTypeFilter: unknown;
    StringFilter: unknown;
};

export type AbilityBonusApiType = {
    ability_score: AbilityScoreApiType;
    bonus: Scalars['Int'];
};

export type AbilityBonusChoiceApiType = {
    choose: Scalars['Int'];
    from: AbilityBonusOptionSetApiType;
    type: Scalars['String'];
};

export type AbilityBonusOptionApiType = {
    ability_score: AbilityScoreApiType;
    bonus: Scalars['Int'];
    option_type: Scalars['String'];
};

export type AbilityBonusOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<AbilityBonusOptionApiType>;
};

export type AbilityScoreApiType = {
    desc: Array<Scalars['String']>;
    full_name: Scalars['String'];
    index: Scalars['String'];
    name: Scalars['String'];
    skills: Array<SkillApiType>;
};

export type AbilityScoreSkillsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type AbilityScorePrerequisiteApiType = {
    ability_score: AbilityScoreApiType;
    minimum_score: Scalars['Int'];
};

export type ActionApiType = {
    action_name: Scalars['String'];
    count: Scalars['ActionCount'];
    type: Scalars['String'];
};

export type ActionDamageApiType = {
    choose?: Maybe<Scalars['Int']>;
    damage_dice?: Maybe<Scalars['String']>;
    damage_type?: Maybe<DamageTypeApiType>;
    dc?: Maybe<ActionDcApiType>;
    from?: Maybe<DamageOptionSetApiType>;
    type?: Maybe<Scalars['String']>;
};

export type ActionDcApiType = {
    success: DcSuccessApiType;
    type: AbilityScoreApiType;
    value: Scalars['Int'];
};

export type ActionOptionApiType = {
    action_name: Scalars['String'];
    count: Scalars['ActionCount'];
    option_type: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};

export type AlignmentApiType = {
    abbreviation: Scalars['String'];
    desc: Scalars['String'];
    index: Scalars['String'];
    name: Scalars['String'];
};

export type AmmunitionApiType = IEquipmentApiType &
    IEquipmentBaseApiType &
    IGearApiType & {
        cost: CostApiType;
        desc?: Maybe<Array<Scalars['String']>>;
        equipment_category: EquipmentCategoryApiType;
        gear_category: EquipmentCategoryApiType;
        index: Scalars['String'];
        name: Scalars['String'];
        quantity: Scalars['Int'];
        weight?: Maybe<Scalars['Float']>;
    };

export type AreaOfEffectApiType = {
    size: Scalars['Int'];
    type: AreaOfEffectTypeApiType;
};

export type AreaOfEffectFilterApiType = {
    size?: InputMaybe<Scalars['IntFilter']>;
    type?: InputMaybe<Scalars['AreaOfEffectTypeFilter']>;
};

export enum AreaOfEffectTypeApiType {
    ConeApiType = 'CONE',
    CubeApiType = 'CUBE',
    CylinderApiType = 'CYLINDER',
    LineApiType = 'LINE',
    SphereApiType = 'SPHERE',
}

export type ArmorApiType = IEquipmentApiType &
    IEquipmentBaseApiType & {
        armor_category: EquipmentCategoryApiType;
        armor_class: ArmorClassApiType;
        cost: CostApiType;
        desc?: Maybe<Array<Scalars['String']>>;
        equipment_category: EquipmentCategoryApiType;
        index: Scalars['String'];
        name: Scalars['String'];
        stealth_disadvantage: Scalars['Boolean'];
        str_minimum: Scalars['Int'];
        weight?: Maybe<Scalars['Float']>;
    };

export type ArmorClassApiType = {
    base: Scalars['Int'];
    dex_bonus: Scalars['Boolean'];
    max_bonus?: Maybe<Scalars['Int']>;
};

export type AttackApiType = {
    damage?: Maybe<Array<DamageApiType>>;
    dc: ActionDcApiType;
    name: Scalars['String'];
};

export type BackgroundApiType = {
    bonds: StringChoiceApiType;
    feature: BackgroundFeatureApiType;
    flaws: StringChoiceApiType;
    ideals: IdealChoiceApiType;
    index: Scalars['String'];
    language_options: LanguageChoiceApiType;
    name: Scalars['String'];
    personality_traits: StringChoiceApiType;
    starting_equipment: Array<QuantityApiType>;
    starting_equipment_options: Array<EquipmentCategoryChoiceApiType>;
    starting_proficiencies: Array<ProficiencyApiType>;
};

export type BackgroundStarting_EquipmentArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type BackgroundStarting_ProficienciesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type BackgroundFeatureApiType = {
    desc: Array<Scalars['String']>;
    name: Scalars['String'];
};

export type BarbarianSpecificApiType = {
    brutal_critical_dice: Scalars['Int'];
    rage_count: Scalars['Int'];
    rage_damage_bonus: Scalars['Int'];
};

export type BardSpecificApiType = {
    bardic_inspiration_die: Scalars['Int'];
    magical_secrets_max_5: Scalars['Int'];
    magical_secrets_max_7: Scalars['Int'];
    magical_secrets_max_9: Scalars['Int'];
    song_of_rest_die: Scalars['Int'];
};

export type BreathChoiceApiType = {
    choose: Scalars['Int'];
    from: BreathOptionSetApiType;
    type: Scalars['String'];
};

export type BreathOptionApiType = {
    damage?: Maybe<Array<DamageApiType>>;
    dc: ActionDcApiType;
    name: Scalars['String'];
    option_type: Scalars['String'];
};

export type BreathOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<BreathOptionApiType>;
};

export type BreathWeaponDamageApiType = {
    damage_at_character_level: Array<DamageAtLevelApiType>;
    damage_type: DamageTypeApiType;
};

export type BreathWeaponDcApiType = {
    success: DcSuccessApiType;
    type: AbilityScoreApiType;
};

export type BreathWeaponTraitApiType = {
    area_of_effect: AreaOfEffectApiType;
    damage: Array<BreathWeaponDamageApiType>;
    dc: BreathWeaponDcApiType;
    desc: Scalars['String'];
    name: Scalars['String'];
    usage: BreathWeaponUsageApiType;
};

export type BreathWeaponUsageApiType = {
    times: Scalars['Int'];
    type: UsageTypeApiType;
};

export type ClassApiType = {
    class_levels: Array<LevelApiType>;
    hit_die: Scalars['Int'];
    index: Scalars['String'];
    multi_classing: MulticlassingApiType;
    name: Scalars['String'];
    proficiencies: Array<ProficiencyApiType>;
    proficiency_choices: Array<ProficiencyChoiceApiType>;
    saving_throws: Array<AbilityScoreApiType>;
    spellcasting?: Maybe<ClassSpellcastingApiType>;
    spells?: Maybe<Array<SpellApiType>>;
    starting_equipment: Array<QuantityApiType>;
    starting_equipment_options: Array<StartingEquipmentChoiceApiType>;
    subclasses: Array<SubclassApiType>;
};

export type ClassProficienciesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type ClassSpellsArgsApiType = {
    area_of_effect?: InputMaybe<AreaOfEffectFilterApiType>;
    attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']>;
    casting_time?: InputMaybe<Scalars['StringFilter']>;
    concentration?: InputMaybe<Scalars['Boolean']>;
    damage_type?: InputMaybe<Scalars['StringFilter']>;
    dc_type?: InputMaybe<Scalars['StringFilter']>;
    level?: InputMaybe<Scalars['IntFilter']>;
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<SpellOrderApiType>;
    range?: InputMaybe<Scalars['StringFilter']>;
    ritual?: InputMaybe<Scalars['Boolean']>;
    school?: InputMaybe<Scalars['StringFilter']>;
    skip?: InputMaybe<Scalars['Int']>;
    subclass?: InputMaybe<Scalars['StringFilter']>;
};

export type ClassSubclassesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type ClassOrderApiType = {
    by: ClassOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<ClassOrderApiType>;
};

export enum ClassOrderByApiType {
    HitDieApiType = 'HIT_DIE',
    NameApiType = 'NAME',
}

export type ClassSpecificApiType =
    | BarbarianSpecificApiType
    | BardSpecificApiType
    | ClericSpecificApiType
    | DruidSpecificApiType
    | FighterSpecificApiType
    | MonkSpecificApiType
    | PaladinSpecificApiType
    | RangerSpecificApiType
    | RogueSpecificApiType
    | SorcererSpecificApiType
    | WarlockSpecificApiType
    | WizardSpecificApiType;

export type ClassSpellcastingApiType = {
    info: Array<SpellcastingInfoApiType>;
    level: Scalars['Int'];
    spellcasting_ability: AbilityScoreApiType;
};

export type ClericSpecificApiType = {
    channel_divinity_charges: Scalars['Int'];
    destroy_undead_cr: Scalars['Float'];
};

export type ConditionApiType = {
    desc: Array<Scalars['String']>;
    index: Scalars['String'];
    name: Scalars['String'];
};

export type CostApiType = {
    quantity: Scalars['Int'];
    unit: CurrencyApiType;
};

export type CountedReferenceOptionApiType = {
    count: Scalars['Int'];
    of: IEquipmentApiType;
    option_type: Scalars['String'];
    prerequisites?: Maybe<Array<ProficiencyPrerequisiteApiType>>;
};

export enum CurrencyApiType {
    CpApiType = 'CP',
    GpApiType = 'GP',
    SpApiType = 'SP',
}

export type DamageApiType = {
    damage_dice: Scalars['String'];
    damage_type: DamageTypeApiType;
};

export type DamageAtLevelApiType = {
    damage: Scalars['String'];
    level: Scalars['Int'];
};

export type DamageOptionApiType = {
    damage_dice: Scalars['String'];
    damage_type: DamageTypeApiType;
    notes?: Maybe<Scalars['String']>;
    option_type: Scalars['String'];
};

export type DamageOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<DamageOptionApiType>;
};

export type DamageTypeApiType = {
    desc: Array<Scalars['String']>;
    index: Scalars['String'];
    name: Scalars['String'];
};

export enum DcSuccessApiType {
    HalfApiType = 'HALF',
    NoneApiType = 'NONE',
    OtherApiType = 'OTHER',
}

export type DevotionSpecificApiType = {
    aura_range: Scalars['Int'];
};

export type DiceApiType = {
    dice_count: Scalars['Int'];
    dice_value: Scalars['Int'];
};

export type DruidSpecificApiType = {
    wild_shape_fly: Scalars['Boolean'];
    wild_shape_max_cr: Scalars['Float'];
    wild_shape_swim: Scalars['Boolean'];
};

export type EquipmentCategoryApiType = {
    equipment: Array<IEquipmentBaseApiType>;
    index: Scalars['String'];
    name: Scalars['String'];
};

export type EquipmentCategoryEquipmentArgsApiType = {
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<EquipmentCategoryOrderApiType>;
    skip?: InputMaybe<Scalars['Int']>;
};

export type EquipmentCategoryChoiceApiType = {
    choose: Scalars['Int'];
    from: EquipmentCategoryOptionSetApiType;
    type: Scalars['String'];
};

export type EquipmentCategoryChoiceOptionApiType = {
    choice: EquipmentCategoryChoiceApiType;
    option_type: Scalars['String'];
};

export type EquipmentCategoryOptionSetApiType = {
    equipment_category: EquipmentCategoryApiType;
    option_set_type: Scalars['String'];
};

export type EquipmentCategoryOrderApiType = {
    by: EquipmentCategoryOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<EquipmentCategoryOrderApiType>;
};

export enum EquipmentCategoryOrderByApiType {
    NameApiType = 'NAME',
    WeightApiType = 'WEIGHT',
}

export type EquipmentMultipleItemApiType = CountedReferenceOptionApiType | EquipmentCategoryChoiceOptionApiType;

export type EquipmentMultipleOptionApiType = {
    items: Array<EquipmentMultipleItemApiType>;
    option_type: Scalars['String'];
};

export type EquipmentOptionApiType =
    | CountedReferenceOptionApiType
    | EquipmentCategoryChoiceOptionApiType
    | EquipmentMultipleOptionApiType;

export type EquipmentOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<EquipmentOptionApiType>;
};

export type EquipmentOrderApiType = {
    by: EquipmentOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<EquipmentOrderApiType>;
};

export enum EquipmentOrderByApiType {
    EquipmentCategoryApiType = 'EQUIPMENT_CATEGORY',
    NameApiType = 'NAME',
    WeightApiType = 'WEIGHT',
}

export type ExpertiseChoiceApiType = {
    choose: Scalars['Int'];
    from: ExpertiseOptionSetApiType;
    type: Scalars['String'];
};

export type ExpertiseMultipleOptionApiType = {
    items: Array<ProficiencyOptionApiType>;
    option_type: Scalars['String'];
};

export type ExpertiseOptionApiType =
    | ExpertiseMultipleOptionApiType
    | ProficiencyChoiceOptionApiType
    | ProficiencyReferenceOptionApiType;

export type ExpertiseOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<ExpertiseOptionApiType>;
};

export type FeatApiType = {
    desc: Array<Scalars['String']>;
    index: Scalars['String'];
    name: Scalars['String'];
    prerequisites: Array<AbilityScorePrerequisiteApiType>;
};

export type FeatureApiType = {
    class: ClassApiType;
    desc: Array<Scalars['String']>;
    feature_specific?: Maybe<FeatureSpecificApiType>;
    index: Scalars['String'];
    level: Scalars['Int'];
    name: Scalars['String'];
    parent?: Maybe<FeatureApiType>;
    prerequisites: Array<FeaturePrerequisiteApiType>;
    reference?: Maybe<Scalars['String']>;
    subclass?: Maybe<SubclassApiType>;
};

export type FeatureChoiceApiType = {
    choose: Scalars['Int'];
    from: FeatureOptionSetApiType;
    type: Scalars['String'];
};

export type FeatureOptionApiType = {
    item: FeatureApiType;
    option_type: Scalars['String'];
};

export type FeatureOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<FeatureOptionApiType>;
};

export type FeatureOrderApiType = {
    by: FeatureOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<FeatureOrderApiType>;
};

export enum FeatureOrderByApiType {
    ClassApiType = 'CLASS',
    LevelApiType = 'LEVEL',
    NameApiType = 'NAME',
    SubclassApiType = 'SUBCLASS',
}

export type FeaturePrerequisiteApiType = {
    feature?: Maybe<FeatureApiType>;
    level?: Maybe<Scalars['Int']>;
    spell?: Maybe<SpellApiType>;
    type: Scalars['String'];
};

export type FeatureSpecificApiType = {
    expertise_options?: Maybe<ExpertiseChoiceApiType>;
    invocations?: Maybe<Array<FeatureApiType>>;
    subfeature_options?: Maybe<FeatureChoiceApiType>;
};

export type FighterSpecificApiType = {
    action_surges: Scalars['Int'];
    extra_attacks: Scalars['Int'];
    indomitable_uses: Scalars['Int'];
};

export type GearApiType = IEquipmentApiType &
    IEquipmentBaseApiType &
    IGearApiType & {
        cost: CostApiType;
        desc?: Maybe<Array<Scalars['String']>>;
        equipment_category: EquipmentCategoryApiType;
        gear_category: EquipmentCategoryApiType;
        index: Scalars['String'];
        name: Scalars['String'];
        weight?: Maybe<Scalars['Float']>;
    };

export type HealingAtLevelApiType = {
    healing: Scalars['String'];
    level: Scalars['Int'];
};

export type IEquipmentApiType = {
    cost: CostApiType;
    desc?: Maybe<Array<Scalars['String']>>;
    equipment_category: EquipmentCategoryApiType;
    index: Scalars['String'];
    name: Scalars['String'];
    weight?: Maybe<Scalars['Float']>;
};

export type IEquipmentBaseApiType = {
    desc?: Maybe<Array<Scalars['String']>>;
    equipment_category: EquipmentCategoryApiType;
    index: Scalars['String'];
    name: Scalars['String'];
};

export type IGearApiType = {
    cost: CostApiType;
    desc?: Maybe<Array<Scalars['String']>>;
    equipment_category: EquipmentCategoryApiType;
    gear_category: EquipmentCategoryApiType;
    index: Scalars['String'];
    name: Scalars['String'];
    weight?: Maybe<Scalars['Float']>;
};

export type IdealChoiceApiType = {
    choose: Scalars['Int'];
    from: IdealOptionSetApiType;
    type: Scalars['String'];
};

export type IdealOptionApiType = {
    alignments: Array<AlignmentApiType>;
    desc: Scalars['String'];
    option_type: Scalars['String'];
};

export type IdealOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<IdealOptionApiType>;
};

export type LanguageApiType = {
    desc?: Maybe<Scalars['String']>;
    index: Scalars['String'];
    name: Scalars['String'];
    script?: Maybe<LanguageScriptApiType>;
    type: LanguageTypeApiType;
    typical_speakers: Array<Scalars['String']>;
};

export type LanguageChoiceApiType = {
    choose: Scalars['Int'];
    from: LanguageOptionSetApiType;
    type: Scalars['String'];
};

export type LanguageOptionApiType = {
    item: LanguageApiType;
    option_type: Scalars['String'];
};

export type LanguageOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<LanguageOptionApiType>;
};

export type LanguageOrderApiType = {
    by: LanguageOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<LanguageOrderApiType>;
};

export enum LanguageOrderByApiType {
    NameApiType = 'NAME',
    ScriptApiType = 'SCRIPT',
    TypeApiType = 'TYPE',
}

export enum LanguageScriptApiType {
    CelestialApiType = 'CELESTIAL',
    CommonApiType = 'COMMON',
    DraconicApiType = 'DRACONIC',
    DwarvishApiType = 'DWARVISH',
    ElvishApiType = 'ELVISH',
    InfernalApiType = 'INFERNAL',
}

export enum LanguageTypeApiType {
    ExoticApiType = 'EXOTIC',
    StandardApiType = 'STANDARD',
}

export type LegendaryActionApiType = {
    damage?: Maybe<Array<DamageApiType>>;
    dc?: Maybe<ActionDcApiType>;
    desc: Scalars['String'];
    name: Scalars['String'];
};

export type LevelApiType = {
    ability_score_bonuses?: Maybe<Scalars['Int']>;
    class: ClassApiType;
    class_specific?: Maybe<ClassSpecificApiType>;
    features: Array<FeatureApiType>;
    index: Scalars['String'];
    level: Scalars['Int'];
    prof_bonus?: Maybe<Scalars['Int']>;
    spellcasting?: Maybe<LevelSpellcastingApiType>;
    subclass?: Maybe<SubclassApiType>;
    subclass_specific?: Maybe<SubclassSpecificApiType>;
};

export type LevelFeaturesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type LevelOrderApiType = {
    by: LevelOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<LevelOrderApiType>;
};

export enum LevelOrderByApiType {
    AbilityScoreBonusesApiType = 'ABILITY_SCORE_BONUSES',
    ClassApiType = 'CLASS',
    LevelApiType = 'LEVEL',
    ProfBonusApiType = 'PROF_BONUS',
    SubclassApiType = 'SUBCLASS',
}

export type LevelSpellcastingApiType = {
    cantrips_known?: Maybe<Scalars['Int']>;
    spell_slots_level_1?: Maybe<Scalars['Int']>;
    spell_slots_level_2?: Maybe<Scalars['Int']>;
    spell_slots_level_3?: Maybe<Scalars['Int']>;
    spell_slots_level_4?: Maybe<Scalars['Int']>;
    spell_slots_level_5?: Maybe<Scalars['Int']>;
    spell_slots_level_6?: Maybe<Scalars['Int']>;
    spell_slots_level_7?: Maybe<Scalars['Int']>;
    spell_slots_level_8?: Maybe<Scalars['Int']>;
    spell_slots_level_9?: Maybe<Scalars['Int']>;
    spells_known?: Maybe<Scalars['Int']>;
};

export type LoreSpecificApiType = {
    additional_magical_secrets_max_lvl: Scalars['Int'];
};

export type MagicItemApiType = IEquipmentBaseApiType & {
    desc: Array<Scalars['String']>;
    equipment_category: EquipmentCategoryApiType;
    index: Scalars['String'];
    name: Scalars['String'];
    rarity: MagicItemRarityApiType;
};

export type MagicItemOrderApiType = {
    by: MagicItemOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<MagicItemOrderApiType>;
};

export enum MagicItemOrderByApiType {
    EquipmentCategoryApiType = 'EQUIPMENT_CATEGORY',
    NameApiType = 'NAME',
}

export enum MagicItemRarityApiType {
    ArtifactApiType = 'ARTIFACT',
    CommonApiType = 'COMMON',
    LegendaryApiType = 'LEGENDARY',
    RareApiType = 'RARE',
    UncommonApiType = 'UNCOMMON',
    VariesApiType = 'VARIES',
    VeryRareApiType = 'VERY_RARE',
}

export type MagicSchoolApiType = {
    desc: Scalars['String'];
    index: Scalars['String'];
    name: Scalars['String'];
    spells: Array<SpellApiType>;
};

export type MagicSchoolSpellsArgsApiType = {
    area_of_effect?: InputMaybe<AreaOfEffectFilterApiType>;
    attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']>;
    casting_time?: InputMaybe<Scalars['StringFilter']>;
    class?: InputMaybe<Scalars['StringFilter']>;
    concentration?: InputMaybe<Scalars['Boolean']>;
    damage_type?: InputMaybe<Scalars['StringFilter']>;
    dc_type?: InputMaybe<Scalars['StringFilter']>;
    level?: InputMaybe<Scalars['IntFilter']>;
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<SpellOrderApiType>;
    range?: InputMaybe<Scalars['StringFilter']>;
    ritual?: InputMaybe<Scalars['Boolean']>;
    skip?: InputMaybe<Scalars['Int']>;
    subclass?: InputMaybe<Scalars['StringFilter']>;
};

export type MonkSpecificApiType = {
    ki_points: Scalars['Int'];
    martial_arts: DiceApiType;
    unarmored_movement: Scalars['Int'];
};

export type MonsterApiType = {
    actions?: Maybe<Array<MonsterActionApiType>>;
    armor_class: Scalars['Int'];
    challenge_rating: Scalars['Float'];
    charisma: Scalars['Int'];
    condition_immunities: Array<ConditionApiType>;
    constitution: Scalars['Int'];
    damage_immunities: Array<Scalars['String']>;
    damage_resistances: Array<Scalars['String']>;
    damage_vulnerabilities: Array<Scalars['String']>;
    desc?: Maybe<Scalars['String']>;
    dexterity: Scalars['Int'];
    forms?: Maybe<Array<MonsterApiType>>;
    hit_dice: Scalars['String'];
    hit_points: Scalars['Int'];
    hit_points_roll: Scalars['String'];
    image?: Maybe<Scalars['String']>;
    index: Scalars['String'];
    intelligence: Scalars['Int'];
    languages: Scalars['String'];
    legendary_actions?: Maybe<Array<LegendaryActionApiType>>;
    name: Scalars['String'];
    proficiencies: Array<MonsterProficiencyApiType>;
    reactions?: Maybe<Array<ReactionApiType>>;
    senses: SensesApiType;
    size: SizeApiType;
    special_abilities?: Maybe<Array<SpecialAbilityApiType>>;
    speed: MonsterSpeedApiType;
    strength: Scalars['Int'];
    subtype?: Maybe<MonsterSubtypeApiType>;
    type: MonsterTypeApiType;
    wisdom: Scalars['Int'];
    xp: Scalars['Int'];
};

export type MonsterActionApiType = {
    action_options?: Maybe<MonsterActionChoiceApiType>;
    actions?: Maybe<Array<ActionApiType>>;
    attack_bonus?: Maybe<Scalars['Int']>;
    attacks?: Maybe<Array<AttackApiType>>;
    damage?: Maybe<Array<ActionDamageApiType>>;
    dc?: Maybe<ActionDcApiType>;
    desc: Scalars['String'];
    multiattack_type?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    options?: Maybe<BreathChoiceApiType>;
    usage?: Maybe<UsageApiType>;
};

export type MonsterActionChoiceApiType = {
    choose: Scalars['Int'];
    from: MonsterActionOptionSetApiType;
    type: Scalars['String'];
};

export type MonsterActionOptionApiType = ActionOptionApiType | MultipleActionOptionApiType;

export type MonsterActionOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<MonsterActionOptionApiType>;
};

export type MonsterOrderApiType = {
    by: MonsterOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<MonsterOrderApiType>;
};

export enum MonsterOrderByApiType {
    ArmorClassApiType = 'ARMOR_CLASS',
    ChallengeRatingApiType = 'CHALLENGE_RATING',
    CharismaApiType = 'CHARISMA',
    ConstitutionApiType = 'CONSTITUTION',
    DexterityApiType = 'DEXTERITY',
    IntelligenceApiType = 'INTELLIGENCE',
    NameApiType = 'NAME',
    SizeApiType = 'SIZE',
    StrengthApiType = 'STRENGTH',
    SubtypeApiType = 'SUBTYPE',
    TypeApiType = 'TYPE',
    WisdomApiType = 'WISDOM',
    XpApiType = 'XP',
}

export type MonsterProficiencyApiType = {
    proficiency: ProficiencyApiType;
    value: Scalars['Int'];
};

export type MonsterSpeedApiType = {
    burrow?: Maybe<Scalars['String']>;
    climb?: Maybe<Scalars['String']>;
    fly?: Maybe<Scalars['String']>;
    hover?: Maybe<Scalars['Boolean']>;
    swim?: Maybe<Scalars['String']>;
    walk?: Maybe<Scalars['String']>;
};

export type MonsterSpellApiType = {
    spell: SpellApiType;
    usage?: Maybe<UsageApiType>;
};

export type MonsterSpellSlotApiType = {
    level: Scalars['Int'];
    slots: Scalars['Int'];
};

export type MonsterSpellcastingApiType = {
    ability: AbilityScoreApiType;
    components_required?: Maybe<Array<SpellComponentApiType>>;
    dc?: Maybe<Scalars['Int']>;
    level?: Maybe<Scalars['Int']>;
    modifier?: Maybe<Scalars['Int']>;
    school?: Maybe<Scalars['String']>;
    slots?: Maybe<Array<MonsterSpellSlotApiType>>;
    spells: Array<MonsterSpellApiType>;
};

export enum MonsterSubtypeApiType {
    AnyRaceApiType = 'ANY_RACE',
    DemonApiType = 'DEMON',
    DevilApiType = 'DEVIL',
    DwarfApiType = 'DWARF',
    ElfApiType = 'ELF',
    GnollApiType = 'GNOLL',
    GnomeApiType = 'GNOME',
    GoblinoidApiType = 'GOBLINOID',
    GrimlockApiType = 'GRIMLOCK',
    HumanApiType = 'HUMAN',
    KoboldApiType = 'KOBOLD',
    LizardfolkApiType = 'LIZARDFOLK',
    MerfolkApiType = 'MERFOLK',
    OrcApiType = 'ORC',
    SahuaginApiType = 'SAHUAGIN',
    ShapechangerApiType = 'SHAPECHANGER',
    TitanApiType = 'TITAN',
}

export enum MonsterTypeApiType {
    AberrationApiType = 'ABERRATION',
    BeastApiType = 'BEAST',
    CelestialApiType = 'CELESTIAL',
    ConstructApiType = 'CONSTRUCT',
    DragonApiType = 'DRAGON',
    ElementalApiType = 'ELEMENTAL',
    FeyApiType = 'FEY',
    FiendApiType = 'FIEND',
    GiantApiType = 'GIANT',
    HumanoidApiType = 'HUMANOID',
    MonstrosityApiType = 'MONSTROSITY',
    OozeApiType = 'OOZE',
    PlantApiType = 'PLANT',
    SwarmApiType = 'SWARM',
    UndeadApiType = 'UNDEAD',
}

export type MulticlassingApiType = {
    prerequisite_options?: Maybe<PrerequisiteChoiceApiType>;
    prerequisites?: Maybe<Array<AbilityScorePrerequisiteApiType>>;
    proficiencies: Array<ProficiencyApiType>;
    proficiency_choices?: Maybe<Array<ProficiencyChoiceApiType>>;
};

export type MultipleActionOptionApiType = {
    items: Array<ActionOptionApiType>;
    option_type: Scalars['String'];
};

export enum OrderByDirectionApiType {
    AscendingApiType = 'ASCENDING',
    DescendingApiType = 'DESCENDING',
}

export type PackApiType = IEquipmentApiType &
    IEquipmentBaseApiType &
    IGearApiType & {
        contents: Array<PackQuantityApiType>;
        cost: CostApiType;
        desc?: Maybe<Array<Scalars['String']>>;
        equipment_category: EquipmentCategoryApiType;
        gear_category: EquipmentCategoryApiType;
        index: Scalars['String'];
        name: Scalars['String'];
        weight?: Maybe<Scalars['Float']>;
    };

export type PackQuantityApiType = {
    item: IEquipmentApiType;
    quantity: Scalars['Int'];
};

export type PaladinSpecificApiType = {
    aura_range: Scalars['Int'];
};

export type PrerequisiteChoiceApiType = {
    choose: Scalars['Int'];
    from: PrerequisiteOptionSetApiType;
    type: Scalars['String'];
};

export type PrerequisiteOptionApiType = {
    ability_score: AbilityScoreApiType;
    minimum_score: Scalars['Int'];
    option_type: Scalars['String'];
};

export type PrerequisiteOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<PrerequisiteOptionApiType>;
};

export type ProficiencyApiType = {
    classes: Array<ClassApiType>;
    index: Scalars['String'];
    name: Scalars['String'];
    races: Array<ProficiencyRaceApiType>;
    reference: ProficiencyReferenceApiType;
    type: ProficiencyTypeApiType;
};

export type ProficiencyClassesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type ProficiencyRacesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type ProficiencyChoiceApiType = {
    choose: Scalars['Int'];
    desc?: Maybe<Scalars['String']>;
    from: ProficiencyOptionSetApiType;
    type: Scalars['String'];
};

export type ProficiencyChoiceOptionApiType = {
    choice: ProficiencyChoiceApiType;
    option_type: Scalars['String'];
};

export type ProficiencyOptionApiType = ProficiencyChoiceOptionApiType | ProficiencyReferenceOptionApiType;

export type ProficiencyOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<ProficiencyOptionApiType>;
};

export type ProficiencyOrderApiType = {
    by: ProficiencyOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<ProficiencyOrderApiType>;
};

export enum ProficiencyOrderByApiType {
    NameApiType = 'NAME',
    TypeApiType = 'TYPE',
}

export type ProficiencyPrerequisiteApiType = {
    proficiency: ProficiencyApiType;
    type: Scalars['String'];
};

export type ProficiencyRaceApiType = {
    ability_bonuses: Array<AbilityBonusApiType>;
    index: Scalars['String'];
    name: Scalars['String'];
};

export type ProficiencyReferenceApiType =
    | AbilityScoreApiType
    | AmmunitionApiType
    | ArmorApiType
    | EquipmentCategoryApiType
    | GearApiType
    | PackApiType
    | SkillApiType
    | ToolApiType
    | VehicleApiType
    | WeaponApiType;

export type ProficiencyReferenceOptionApiType = {
    item: ProficiencyApiType;
    option_type: Scalars['String'];
};

export enum ProficiencyTypeApiType {
    ArmorApiType = 'ARMOR',
    ArtisansToolsApiType = 'ARTISANS_TOOLS',
    GamingSetsApiType = 'GAMING_SETS',
    MusicalInstrumentsApiType = 'MUSICAL_INSTRUMENTS',
    OtherApiType = 'OTHER',
    SavingThrowsApiType = 'SAVING_THROWS',
    SkillsApiType = 'SKILLS',
    VehiclesApiType = 'VEHICLES',
    WeaponsApiType = 'WEAPONS',
}

export type QuantityApiType = {
    equipment: IEquipmentApiType;
    quantity: Scalars['Int'];
};

export type QueryApiType = {
    abilityScore?: Maybe<AbilityScoreApiType>;
    abilityScores?: Maybe<Array<AbilityScoreApiType>>;
    alignment?: Maybe<AlignmentApiType>;
    alignments?: Maybe<Array<AlignmentApiType>>;
    background?: Maybe<BackgroundApiType>;
    backgrounds: Array<BackgroundApiType>;
    class?: Maybe<ClassApiType>;
    classes: Array<ClassApiType>;
    condition?: Maybe<ConditionApiType>;
    conditions?: Maybe<Array<ConditionApiType>>;
    damageType?: Maybe<DamageTypeApiType>;
    damageTypes?: Maybe<Array<DamageTypeApiType>>;
    equipment?: Maybe<IEquipmentApiType>;
    equipmentCategories?: Maybe<Array<EquipmentCategoryApiType>>;
    equipmentCategory?: Maybe<EquipmentCategoryApiType>;
    equipments?: Maybe<Array<IEquipmentApiType>>;
    feat?: Maybe<FeatApiType>;
    feats?: Maybe<Array<FeatApiType>>;
    feature?: Maybe<FeatureApiType>;
    features?: Maybe<Array<FeatureApiType>>;
    language?: Maybe<LanguageApiType>;
    languages?: Maybe<Array<LanguageApiType>>;
    level?: Maybe<LevelApiType>;
    levels?: Maybe<Array<LevelApiType>>;
    magicItem?: Maybe<MagicItemApiType>;
    magicItems?: Maybe<Array<MagicItemApiType>>;
    magicSchool?: Maybe<MagicSchoolApiType>;
    magicSchools?: Maybe<Array<MagicSchoolApiType>>;
    monster?: Maybe<MonsterApiType>;
    monsters?: Maybe<Array<MonsterApiType>>;
    proficiencies?: Maybe<Array<ProficiencyApiType>>;
    proficiency?: Maybe<ProficiencyApiType>;
    race?: Maybe<RaceApiType>;
    races: Array<RaceApiType>;
    rule?: Maybe<RuleApiType>;
    ruleSection?: Maybe<RuleSectionApiType>;
    ruleSections?: Maybe<Array<RuleSectionApiType>>;
    rules?: Maybe<Array<Maybe<RuleApiType>>>;
    skill?: Maybe<SkillApiType>;
    skills?: Maybe<Array<SkillApiType>>;
    spell?: Maybe<SpellApiType>;
    spells?: Maybe<Array<SpellApiType>>;
    subclass?: Maybe<SubclassApiType>;
    subclasses: Array<SubclassApiType>;
    subrace?: Maybe<SubraceApiType>;
    subraces: Array<SubraceApiType>;
    trait?: Maybe<TraitApiType>;
    traits?: Maybe<Array<TraitApiType>>;
    weaponProperties?: Maybe<Array<Maybe<WeaponPropertyApiType>>>;
    weaponProperty?: Maybe<WeaponPropertyApiType>;
};

export type QueryAbilityScoreArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryAbilityScoresArgsApiType = {
    full_name?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryAlignmentArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryAlignmentsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryBackgroundArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryBackgroundsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryClassArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryClassesArgsApiType = {
    hit_die?: InputMaybe<Scalars['IntFilter']>;
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<ClassOrderApiType>;
};

export type QueryConditionArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryConditionsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryDamageTypeArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryDamageTypesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryEquipmentArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryEquipmentCategoriesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryEquipmentCategoryArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryEquipmentsArgsApiType = {
    equipment_category?: InputMaybe<Scalars['StringFilter']>;
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<EquipmentOrderApiType>;
    skip?: InputMaybe<Scalars['Int']>;
};

export type QueryFeatArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryFeatsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryFeatureArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryFeaturesArgsApiType = {
    class?: InputMaybe<Scalars['StringFilter']>;
    level?: InputMaybe<Scalars['IntFilter']>;
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<FeatureOrderApiType>;
    skip?: InputMaybe<Scalars['Int']>;
    subclass?: InputMaybe<Scalars['StringFilter']>;
};

export type QueryLanguageArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryLanguagesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<LanguageOrderApiType>;
    script?: InputMaybe<Scalars['LanguageScriptFilter']>;
    type?: InputMaybe<LanguageTypeApiType>;
};

export type QueryLevelArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryLevelsArgsApiType = {
    ability_score_bonuses?: InputMaybe<Scalars['IntFilter']>;
    class?: InputMaybe<Scalars['StringFilter']>;
    level?: InputMaybe<Scalars['IntFilter']>;
    limit?: Scalars['Int'];
    order?: InputMaybe<LevelOrderApiType>;
    prof_bonus?: InputMaybe<Scalars['IntFilter']>;
    skip?: InputMaybe<Scalars['Int']>;
    subclass?: InputMaybe<Scalars['StringFilter']>;
};

export type QueryMagicItemArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryMagicItemsArgsApiType = {
    equipment_category?: InputMaybe<Scalars['StringFilter']>;
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<MagicItemOrderApiType>;
    skip?: InputMaybe<Scalars['Int']>;
};

export type QueryMagicSchoolArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryMagicSchoolsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryMonsterArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryMonstersArgsApiType = {
    armor_class?: InputMaybe<Scalars['IntFilter']>;
    challenge_rating?: InputMaybe<Scalars['FloatFilter']>;
    charisma?: InputMaybe<Scalars['IntFilter']>;
    constitution?: InputMaybe<Scalars['IntFilter']>;
    damage_immunity?: InputMaybe<Scalars['StringFilter']>;
    damage_resistance?: InputMaybe<Scalars['StringFilter']>;
    damage_vulnerability?: InputMaybe<Scalars['StringFilter']>;
    dexterity?: InputMaybe<Scalars['IntFilter']>;
    intelligence?: InputMaybe<Scalars['IntFilter']>;
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<MonsterOrderApiType>;
    size?: InputMaybe<Scalars['SizeFilter']>;
    skip?: InputMaybe<Scalars['Int']>;
    strength?: InputMaybe<Scalars['IntFilter']>;
    subtype?: InputMaybe<Scalars['MonsterSubtypeFilter']>;
    type?: InputMaybe<Scalars['MonsterTypeFilter']>;
    wisdom?: InputMaybe<Scalars['IntFilter']>;
    xp?: InputMaybe<Scalars['IntFilter']>;
};

export type QueryProficienciesArgsApiType = {
    class?: InputMaybe<Scalars['StringFilter']>;
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<ProficiencyOrderApiType>;
    race?: InputMaybe<Scalars['StringFilter']>;
    skip?: InputMaybe<Scalars['Int']>;
    type?: InputMaybe<Scalars['ProficiencyTypeFilter']>;
};

export type QueryProficiencyArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryRaceArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryRacesArgsApiType = {
    ability_bonus?: InputMaybe<Scalars['StringFilter']>;
    language?: InputMaybe<Scalars['StringFilter']>;
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<RaceOrderApiType>;
    size?: InputMaybe<Scalars['SizeFilter']>;
    speed?: InputMaybe<Scalars['IntFilter']>;
};

export type QueryRuleArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryRuleSectionArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryRuleSectionsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryRulesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QuerySkillArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QuerySkillsArgsApiType = {
    ability_score?: InputMaybe<Scalars['StringFilter']>;
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<SkillOrderApiType>;
};

export type QuerySpellArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QuerySpellsArgsApiType = {
    area_of_effect?: InputMaybe<AreaOfEffectFilterApiType>;
    attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']>;
    casting_time?: InputMaybe<Scalars['StringFilter']>;
    class?: InputMaybe<Scalars['StringFilter']>;
    concentration?: InputMaybe<Scalars['Boolean']>;
    damage_type?: InputMaybe<Scalars['StringFilter']>;
    dc_type?: InputMaybe<Scalars['StringFilter']>;
    level?: InputMaybe<Scalars['IntFilter']>;
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<SpellOrderApiType>;
    range?: InputMaybe<Scalars['StringFilter']>;
    ritual?: InputMaybe<Scalars['Boolean']>;
    school?: InputMaybe<Scalars['StringFilter']>;
    skip?: InputMaybe<Scalars['Int']>;
    subclass?: InputMaybe<Scalars['StringFilter']>;
};

export type QuerySubclassArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QuerySubclassesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QuerySubraceArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QuerySubracesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryTraitArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type QueryTraitsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryWeaponPropertiesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
    order_direction?: InputMaybe<OrderByDirectionApiType>;
};

export type QueryWeaponPropertyArgsApiType = {
    index?: InputMaybe<Scalars['String']>;
};

export type RaceApiType = ProficiencyRaceApiType & {
    ability_bonus_options?: Maybe<AbilityBonusChoiceApiType>;
    ability_bonuses: Array<AbilityBonusApiType>;
    age: Scalars['String'];
    alignment: Scalars['String'];
    index: Scalars['String'];
    language_desc: Scalars['String'];
    language_options?: Maybe<LanguageChoiceApiType>;
    languages: Array<LanguageApiType>;
    name: Scalars['String'];
    size: SizeApiType;
    size_description: Scalars['String'];
    speed: Scalars['Int'];
    starting_proficiencies: Array<ProficiencyApiType>;
    starting_proficiency_options?: Maybe<ProficiencyChoiceApiType>;
    subraces: Array<SubraceApiType>;
    traits: Array<TraitApiType>;
};

export type RaceLanguagesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type RaceStarting_ProficienciesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type RaceSubracesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type RaceTraitsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type RaceOrderApiType = {
    by: RaceOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<RaceOrderApiType>;
};

export enum RaceOrderByApiType {
    NameApiType = 'NAME',
    SizeApiType = 'SIZE',
    SpeedApiType = 'SPEED',
}

export type RangeApiType = {
    long?: Maybe<Scalars['Int']>;
    normal: Scalars['Int'];
};

export type RangerSpecificApiType = {
    favored_enemies: Scalars['Int'];
    favored_terrain: Scalars['Int'];
};

export type ReactionApiType = {
    dc?: Maybe<ActionDcApiType>;
    desc: Scalars['String'];
    name: Scalars['String'];
};

export enum RestTypeApiType {
    LongApiType = 'LONG',
    ShortApiType = 'SHORT',
}

export type RogueSpecificApiType = {
    sneak_attack: DiceApiType;
};

export type RuleApiType = {
    desc: Scalars['String'];
    index: Scalars['String'];
    name: Scalars['String'];
    subsections: Array<RuleSectionApiType>;
};

export type RuleSubsectionsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type RuleSectionApiType = {
    desc: Scalars['String'];
    index: Scalars['String'];
    name: Scalars['String'];
};

export type SensesApiType = {
    blindsight?: Maybe<Scalars['String']>;
    darkvision?: Maybe<Scalars['String']>;
    passive_perception: Scalars['Int'];
    tremorsense?: Maybe<Scalars['String']>;
    truesight?: Maybe<Scalars['String']>;
};

export enum SizeApiType {
    GargantuanApiType = 'GARGANTUAN',
    HugeApiType = 'HUGE',
    LargeApiType = 'LARGE',
    MediumApiType = 'MEDIUM',
    SmallApiType = 'SMALL',
    TinyApiType = 'TINY',
}

export type SkillApiType = {
    ability_score: AbilityScoreApiType;
    desc: Array<Scalars['String']>;
    index: Scalars['String'];
    name: Scalars['String'];
};

export type SkillOrderApiType = {
    by: SkillOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<SkillOrderApiType>;
};

export enum SkillOrderByApiType {
    AbilityScoreApiType = 'ABILITY_SCORE',
    NameApiType = 'NAME',
}

export type SorcererSpecificApiType = {
    creating_spell_slots: Array<SpellSlotCreationApiType>;
    metamagic_known: Scalars['Int'];
    sorcery_points: Scalars['Int'];
};

export type SpecialAbilityApiType = {
    damage?: Maybe<Array<DamageApiType>>;
    dc?: Maybe<ActionDcApiType>;
    desc: Scalars['String'];
    name: Scalars['String'];
    spellcasting?: Maybe<MonsterSpellcastingApiType>;
    usage?: Maybe<UsageApiType>;
};

export type SpeedApiType = {
    quantity: Scalars['Float'];
    unit: Scalars['String'];
};

export type SpellApiType = {
    area_of_effect?: Maybe<AreaOfEffectApiType>;
    attack_type?: Maybe<SpellAttackTypeApiType>;
    casting_time: Scalars['String'];
    classes: Array<ClassApiType>;
    components?: Maybe<Array<Maybe<SpellComponentApiType>>>;
    concentration: Scalars['Boolean'];
    damage?: Maybe<SpellDamageApiType>;
    dc?: Maybe<SpellDcApiType>;
    desc: Array<Scalars['String']>;
    duration: Scalars['String'];
    heal_at_slot_level?: Maybe<Array<HealingAtLevelApiType>>;
    higher_level?: Maybe<Array<Scalars['String']>>;
    index: Scalars['String'];
    level: Scalars['Int'];
    material?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    range: Scalars['String'];
    ritual: Scalars['Boolean'];
    school: MagicSchoolApiType;
    subclasses: Array<SubclassApiType>;
};

export type SpellClassesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type SpellSubclassesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export enum SpellAttackTypeApiType {
    MeleeApiType = 'MELEE',
    RangedApiType = 'RANGED',
}

export type SpellChoiceApiType = {
    choose: Scalars['Int'];
    from: SpellOptionSetApiType;
    type: Scalars['String'];
};

export enum SpellComponentApiType {
    MApiType = 'M',
    SApiType = 'S',
    VApiType = 'V',
}

export type SpellDamageApiType = {
    damage_at_character_level?: Maybe<Array<DamageAtLevelApiType>>;
    damage_at_slot_level?: Maybe<Array<DamageAtLevelApiType>>;
    damage_type?: Maybe<DamageTypeApiType>;
};

export type SpellDcApiType = {
    desc?: Maybe<Scalars['String']>;
    success: DcSuccessApiType;
    type: AbilityScoreApiType;
};

export type SpellOptionApiType = {
    item: SpellApiType;
    option_type: Scalars['String'];
};

export type SpellOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<SpellOptionApiType>;
};

export type SpellOrderApiType = {
    by: SpellOrderByApiType;
    direction?: OrderByDirectionApiType;
    then_by?: InputMaybe<SpellOrderApiType>;
};

export enum SpellOrderByApiType {
    AreaOfEffectSizeApiType = 'AREA_OF_EFFECT_SIZE',
    ConcentrationApiType = 'CONCENTRATION',
    LevelApiType = 'LEVEL',
    NameApiType = 'NAME',
    RitualApiType = 'RITUAL',
    SchoolApiType = 'SCHOOL',
}

export type SpellPrerequisiteApiType = FeatureApiType | LevelApiType;

export type SpellSlotCreationApiType = {
    sorcery_point_cost: Scalars['Int'];
    spell_slot_level: Scalars['Int'];
};

export type SpellWithPrerequisiteApiType = {
    prerequisites: Array<Maybe<SpellPrerequisiteApiType>>;
    spell: SpellApiType;
};

export type SpellcastingInfoApiType = {
    desc: Array<Scalars['String']>;
    name: Scalars['String'];
};

export type StartingEquipmentChoiceApiType = {
    choose: Scalars['Int'];
    desc: Scalars['String'];
    from: StartingEquipmentOptionSetApiType;
    type: Scalars['String'];
};

export type StartingEquipmentOptionSetApiType = EquipmentCategoryOptionSetApiType | EquipmentOptionSetApiType;

export type StringChoiceApiType = {
    choose: Scalars['Int'];
    from: StringOptionSetApiType;
    type: Scalars['String'];
};

export type StringOptionApiType = {
    option_type: Scalars['String'];
    string: Scalars['String'];
};

export type StringOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<StringOptionApiType>;
};

export type SubclassApiType = {
    class: ClassApiType;
    desc: Array<Scalars['String']>;
    index: Scalars['String'];
    name: Scalars['String'];
    spells?: Maybe<Array<SpellWithPrerequisiteApiType>>;
    subclass_flavor: Scalars['String'];
    subclass_levels: Array<Maybe<LevelApiType>>;
};

export type SubclassSpellsArgsApiType = {
    area_of_effect?: InputMaybe<AreaOfEffectFilterApiType>;
    attack_type?: InputMaybe<Scalars['SpellAttackTypeFilter']>;
    casting_time?: InputMaybe<Scalars['StringFilter']>;
    class?: InputMaybe<Scalars['StringFilter']>;
    concentration?: InputMaybe<Scalars['Boolean']>;
    damage_type?: InputMaybe<Scalars['StringFilter']>;
    dc_type?: InputMaybe<Scalars['StringFilter']>;
    level?: InputMaybe<Scalars['IntFilter']>;
    limit?: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    order?: InputMaybe<SpellOrderApiType>;
    range?: InputMaybe<Scalars['StringFilter']>;
    ritual?: InputMaybe<Scalars['Boolean']>;
    school?: InputMaybe<Scalars['StringFilter']>;
    skip?: InputMaybe<Scalars['Int']>;
};

export type SubclassSpecificApiType = DevotionSpecificApiType | LoreSpecificApiType;

export type SubraceApiType = ProficiencyRaceApiType & {
    ability_bonuses: Array<AbilityBonusApiType>;
    desc: Scalars['String'];
    index: Scalars['String'];
    language_options?: Maybe<LanguageChoiceApiType>;
    name: Scalars['String'];
    race: RaceApiType;
    racial_traits: Array<TraitApiType>;
    starting_proficiencies: Array<ProficiencyApiType>;
};

export type SubraceRacial_TraitsArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type SubraceStarting_ProficienciesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type ToolApiType = IEquipmentApiType &
    IEquipmentBaseApiType & {
        cost: CostApiType;
        desc?: Maybe<Array<Scalars['String']>>;
        equipment_category: EquipmentCategoryApiType;
        index: Scalars['String'];
        name: Scalars['String'];
        tool_category: EquipmentCategoryApiType;
        weight?: Maybe<Scalars['Float']>;
    };

export type TraitApiType = {
    desc: Array<Scalars['String']>;
    index: Scalars['String'];
    language_options?: Maybe<LanguageChoiceApiType>;
    name: Scalars['String'];
    parent?: Maybe<TraitApiType>;
    proficiencies: Array<ProficiencyApiType>;
    proficiency_choices?: Maybe<ProficiencyChoiceApiType>;
    races: Array<Maybe<RaceApiType>>;
    subraces: Array<SubraceApiType>;
    trait_specific?: Maybe<TraitSpecificApiType>;
};

export type TraitProficienciesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type TraitRacesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type TraitSubracesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type TraitChoiceApiType = {
    choose: Scalars['Int'];
    from: TraitOptionSetApiType;
    type: Scalars['String'];
};

export type TraitOptionApiType = {
    item: TraitApiType;
    option_type: Scalars['String'];
};

export type TraitOptionSetApiType = {
    option_set_type: Scalars['String'];
    options: Array<TraitOptionApiType>;
};

export type TraitSpecificApiType = {
    breath_weapon?: Maybe<BreathWeaponTraitApiType>;
    damage_type?: Maybe<DamageTypeApiType>;
    spell_options?: Maybe<SpellChoiceApiType>;
    subtrait_options?: Maybe<TraitChoiceApiType>;
};

export type UsageApiType = {
    dice?: Maybe<Scalars['String']>;
    min_value?: Maybe<Scalars['Int']>;
    rest_types?: Maybe<Array<RestTypeApiType>>;
    times?: Maybe<Scalars['Int']>;
    type: UsageTypeApiType;
};

export enum UsageTypeApiType {
    AtWillApiType = 'AT_WILL',
    PerDayApiType = 'PER_DAY',
    PerRestApiType = 'PER_REST',
    RechargeAfterRestApiType = 'RECHARGE_AFTER_REST',
    RechargeOnRollApiType = 'RECHARGE_ON_ROLL',
}

export type VehicleApiType = IEquipmentApiType &
    IEquipmentBaseApiType & {
        capacity?: Maybe<Scalars['String']>;
        cost: CostApiType;
        desc?: Maybe<Array<Scalars['String']>>;
        equipment_category: EquipmentCategoryApiType;
        index: Scalars['String'];
        name: Scalars['String'];
        speed?: Maybe<SpeedApiType>;
        vehicle_category: EquipmentCategoryApiType;
        weight?: Maybe<Scalars['Float']>;
    };

export type WarlockSpecificApiType = {
    invocations_known: Scalars['Int'];
    mystic_arcanum_level_6: Scalars['Int'];
    mystic_arcanum_level_7: Scalars['Int'];
    mystic_arcanum_level_8: Scalars['Int'];
    mystic_arcanum_level_9: Scalars['Int'];
};

export type WeaponApiType = IEquipmentApiType &
    IEquipmentBaseApiType & {
        category_range: EquipmentCategoryApiType;
        cost: CostApiType;
        damage?: Maybe<DamageApiType>;
        desc?: Maybe<Array<Scalars['String']>>;
        equipment_category: EquipmentCategoryApiType;
        index: Scalars['String'];
        name: Scalars['String'];
        properties: Array<WeaponPropertyApiType>;
        range: RangeApiType;
        special?: Maybe<Array<Scalars['String']>>;
        throw_range?: Maybe<RangeApiType>;
        two_handed_damage?: Maybe<DamageApiType>;
        weapon_category: EquipmentCategoryApiType;
        weapon_range: WeaponRangeApiType;
        weight?: Maybe<Scalars['Float']>;
    };

export type WeaponPropertiesArgsApiType = {
    name?: InputMaybe<Scalars['String']>;
};

export type WeaponPropertyApiType = {
    desc: Array<Scalars['String']>;
    index: Scalars['String'];
    name: Scalars['String'];
};

export enum WeaponRangeApiType {
    MeleeApiType = 'MELEE',
    RangedApiType = 'RANGED',
}

export type WizardSpecificApiType = {
    arcane_recovery_levels: Scalars['Int'];
};

export type SpellQueryQueryVariablesApiType = Exact<{
    index?: InputMaybe<Scalars['String']>;
}>;

export type SpellQueryQueryApiType = {
    spell?: {
        index: string;
        attack_type?: SpellAttackTypeApiType | null;
        casting_time: string;
        level: number;
        higher_level?: Array<string> | null;
        material?: string | null;
        name: string;
        range: string;
        ritual: boolean;
        concentration: boolean;
        components?: Array<SpellComponentApiType | null> | null;
        desc: Array<string>;
        duration: string;
        area_of_effect?: { type: AreaOfEffectTypeApiType; size: number } | null;
        school: { name: string; index: string; desc: string };
        classes: Array<{ name: string; index: string }>;
        dc?: {
            success: DcSuccessApiType;
            desc?: string | null;
            type: {
                index: string;
                name: string;
                full_name: string;
                desc: Array<string>;
                skills: Array<{ name: string }>;
            };
        } | null;
        damage?: {
            damage_at_slot_level?: Array<{ level: number; damage: string }> | null;
            damage_at_character_level?: Array<{ damage: string; level: number }> | null;
            damage_type?: { desc: Array<string>; name: string; index: string } | null;
        } | null;
        subclasses: Array<{ index: string; name: string }>;
        heal_at_slot_level?: Array<{ healing: string; level: number }> | null;
    } | null;
};

export type SpellsQueryQueryVariablesApiType = Exact<{
    name?: InputMaybe<Scalars['String']>;
    limit: Scalars['Int'];
}>;

export type SpellsQueryQueryApiType = { spells?: Array<{ name: string; index: string }> | null };
