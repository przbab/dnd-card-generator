import gql from 'graphql-tag';

export const spellQuery = gql`
    query SpellQuery($index: String) {
        spell(index: $index) {
            index
            attack_type
            area_of_effect {
                type
                size
            }
            school {
                name
                index
                desc
            }
            casting_time
            classes {
                name
                index
            }
            level
            higher_level
            material
            name
            range
            ritual
            dc {
                success
                desc
                type {
                    index
                    name
                    full_name
                    desc
                    skills {
                        name
                    }
                }
            }
            damage {
                damage_at_slot_level {
                    level
                    damage
                }
                damage_at_character_level {
                    damage
                    level
                }
                damage_type {
                    desc
                    name
                    index
                }
            }
            concentration
            components
            subclasses {
                index
                name
            }
            desc
            duration
            heal_at_slot_level {
                healing
                level
            }
        }
    }
`;
