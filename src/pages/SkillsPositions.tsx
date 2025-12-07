import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Layers,
  CheckSquare,
  Briefcase,
  DollarSign,
  Cpu,
  Zap,
  Heart,
  Wrench,
  Hash,
  Palette,
} from "lucide-react";

// --- 1. TYPESCRIPT INTERFACES ---

/** Defines the structure of a single skill/position option. */
interface SkillOption {
  label: string;
  id: string; // Unique ID for state management, e.g., 'interpersonal_coaching'
}

/** Defines the structure of a skill category. */
interface SkillCategory {
  title: string;
  key: string; // Unique key for the category, e.g., 'interpersonal'
  icon: React.ElementType; // Lucide icon component
  skills: SkillOption[];
}

// --- 2. MOCK DATA (Based on the image) ---

const ALL_SKILLS_DATA: SkillCategory[] = [
  {
    title: "Interpersonal",
    key: "interpersonal",
    icon: Heart,
    skills: [
      { label: "Coaching", id: "interpersonal_coaching" },
      { label: "Collaboration", id: "interpersonal_collaboration" },
      {
        label: "Cultural Awareness/Sensitivity",
        id: "interpersonal_cultural_awareness",
      },
      { label: "Customer Service", id: "interpersonal_customer_service" },
      { label: "Supervision", id: "interpersonal_supervision" },
      { label: "Team Building", id: "interpersonal_team_building" },
    ],
  },
  {
    title: "Communication",
    key: "communication",
    icon: Layers,
    skills: [
      {
        label: "Communicate in Plain Language",
        id: "communication_plain_language",
      },
      { label: "Conflict Resolution", id: "communication_conflict_resolution" },
      {
        label: "Facilitation and Training",
        id: "communication_facilitation_training",
      },
      {
        label: "Interpersonal Communication",
        id: "communication_interpersonal",
      },
      {
        label: "Public and Media Relations",
        id: "communication_media_relations",
      },
      {
        label: "Public Speaking/Presentation Skills",
        id: "communication_public_speaking",
      },
      { label: "Translation", id: "communication_translation" },
      { label: "Verbal Communication", id: "communication_verbal" },
      { label: "Written Communication", id: "communication_written" },
    ],
  },
  {
    title: "Organizational",
    key: "organizational",
    icon: Briefcase,
    skills: [
      { label: "Analysis", id: "organizational_analysis" },
      { label: "Change Management", id: "organizational_change_management" },
      {
        label: "Community Knowledge/Awareness",
        id: "organizational_community_knowledge",
      },
      {
        label: "Manage Meetings & Groups",
        id: "organizational_manage_meetings",
      },
      { label: "Needs Assessment", id: "organizational_needs_assessment" },
      { label: "Plan & Co-ordinate", id: "organizational_plan_coordinate" },
      { label: "Project Management", id: "organizational_project_management" },
      { label: "Systems Thinking", id: "organizational_systems_thinking" },
      { label: "Time Management", id: "organizational_time_management" },
    ],
  },
  {
    title: "Finance/Fundraising",
    key: "finance",
    icon: DollarSign,
    skills: [
      { label: "Event Management", id: "finance_event_management" },
      { label: "Financial Planning", id: "finance_financial_planning" },
      { label: "Fund Development", id: "finance_fund_development" },
      { label: "Resource Management", id: "finance_resource_management" },
    ],
  },
  {
    title: "Technology",
    key: "technology",
    icon: Cpu,
    skills: [
      { label: "Computer Skills", id: "technology_computer_skills" },
      { label: "Process Management", id: "technology_process_management" },
      { label: "Web Design", id: "technology_web_design" },
    ],
  },
  {
    title: "Leadership",
    key: "leadership",
    icon: Zap,
    skills: [
      { label: "Creative Thinking", id: "leadership_creative_thinking" },
      {
        label: "Decision-Making/Prioritizing",
        id: "leadership_decision_making",
      },
      { label: "Motivate Others", id: "leadership_motivate_others" },
      { label: "Problem Solving", id: "leadership_problem_solving" },
      { label: "Stewardship", id: "leadership_stewardship" },
      { label: "Strategic Thinking", id: "leadership_strategic_thinking" },
      {
        label: "Thought Leadership (Innovation)",
        id: "leadership_thought_leadership",
      },
    ],
  },
  {
    title: "Personal Qualities",
    key: "qualities",
    icon: Heart, // Re-use an icon
    skills: [
      { label: "Accountability", id: "qualities_accountability" },
      { label: "Adaptability", id: "qualities_adaptability" },
      { label: "Continuous Learning", id: "qualities_continuous_learning" },
      { label: "Empathy", id: "qualities_empathy" },
      { label: "Ethical Framework", id: "qualities_ethical_framework" },
      { label: "Flexibility", id: "qualities_flexibility" },
      { label: "Respect", id: "qualities_respect" },
      { label: "Self-Motivation", id: "qualities_self_motivation" },
      { label: "Sensitivity", id: "qualities_sensitivity" },
    ],
  },
  {
    title: "Technical",
    key: "technical",
    icon: Wrench,
    skills: [
      { label: "Building", id: "technical_building" },
      { label: "Constructing", id: "technical_constructing" },
      { label: "Maintaining Equipment", id: "technical_maintaining" },
      { label: "Measuring", id: "technical_measuring" },
      { label: "Repairing", id: "technical_repairing" },
    ],
  },
  {
    title: "Numeracy",
    key: "numeracy",
    icon: Hash,
    skills: [
      { label: "Calculating", id: "numeracy_calculating" },
      { label: "Counting", id: "numeracy_counting" },
      { label: "Estimating", id: "numeracy_estimating" },
      { label: "Managing Money", id: "numeracy_managing_money" },
    ],
  },
  {
    title: "Creative",
    key: "creative",
    icon: Palette,
    skills: [
      { label: "Creating", id: "creative_creating" },
      { label: "Designing", id: "creative_designing" },
      { label: "Inventing", id: "creative_inventing" },
      { label: "Performing", id: "creative_performing" },
      { label: "Playing", id: "creative_playing" },
      { label: "Presenting", id: "creative_presenting" },
    ],
  },
];

// --- 3. SUB COMPONENTS ---

interface CheckboxProps {
  skill: SkillOption;
  checked: boolean;
  onToggle: (id: string) => void;
}

/** Individual checkbox component */
const SkillCheckbox: React.FC<CheckboxProps> = ({
  skill,
  checked,
  onToggle,
}) => (
  <label
    className="flex items-center cursor-pointer p-2 transition-colors duration-150 rounded-md hover:bg-blue-50/50"
    htmlFor={skill.id}
  >
    <input
      type="checkbox"
      id={skill.id}
      checked={checked}
      onChange={() => onToggle(skill.id)}
      className="h-4 w-4 text-[#1C75BC] border-gray-300 rounded focus:ring-[#1C75BC] transition-colors duration-150 cursor-pointer"
    />
    <span className="ml-3 text-sm text-gray-700 select-none">
      {skill.label}
    </span>
  </label>
);

interface CategoryProps {
  category: SkillCategory;
  selectedSkills: Set<string>;
  onToggleSkill: (id: string) => void;
  onToggleAll: (categoryKey: string, select: boolean) => void;
}

/** Category container component with "Select All" logic */
const SkillCategorySection: React.FC<CategoryProps> = ({
  category,
  selectedSkills,
  onToggleSkill,
  onToggleAll,
}) => {
  const isAllSelected = useMemo(() => {
    return category.skills.every((skill) => selectedSkills.has(skill.id));
  }, [category.skills, selectedSkills]);

  const toggleSelectAll = () => {
    onToggleAll(category.key, !isAllSelected);
  };

  const Icon = category.icon;

  return (
    <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Category Header */}
      <h3 className="flex items-center text-lg font-semibold text-[#061839] mb-3 border-b pb-2">
        <Icon className="w-5 h-5 mr-2 text-[#1C75BC]" />
        {category.title}
      </h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-1 gap-x-6 mb-4">
        {category.skills.map((skill) => (
          <SkillCheckbox
            key={skill.id}
            skill={skill}
            checked={selectedSkills.has(skill.id)}
            onToggle={onToggleSkill}
          />
        ))}
      </div>

      {/* Select All/Deselect All Link */}
      <button
        onClick={toggleSelectAll}
        className="text-sm font-medium text-[#1C75BC] hover:text-[#061839] transition-colors duration-150 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1C75BC] focus:ring-offset-2 rounded-md"
      >
        {isAllSelected ? "Deselect All" : "Select All"}
      </button>
    </div>
  );
};

// --- 4. MAIN APP COMPONENT ---

const SkillsPositions = () => {
  // State to hold the set of currently selected skill IDs
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );
  const navigate = useNavigate();

  /** Toggles the selection state of a single skill ID. */
  const handleToggleSkill = (skillId: string) => {
    setSelectedSkills((prevSkills) => {
      const newSkills = new Set(prevSkills);
      if (newSkills.has(skillId)) {
        newSkills.delete(skillId);
      } else {
        newSkills.add(skillId);
      }
      return newSkills;
    });
    setSubmissionMessage(null); // Clear message on change
  };

  /** Selects or deselects all skills within a specific category. */
  const handleToggleAll = (categoryKey: string, select: boolean) => {
    setSelectedSkills((prevSkills) => {
      const newSkills = new Set(prevSkills);
      const category = ALL_SKILLS_DATA.find((c) => c.key === categoryKey);

      if (category) {
        category.skills.forEach((skill) => {
          if (select) {
            newSkills.add(skill.id);
          } else {
            newSkills.delete(skill.id);
          }
        });
      }
      return newSkills;
    });
    setSubmissionMessage(null); // Clear message on change
  };

  /** Handles the form submission (simulated). */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSkills.size === 0) {
      setSubmissionMessage(
        "Please select at least one skill before searching."
      );
    } else {
      const selectedLabels = Array.from(selectedSkills).map((id) => {
        // Simple search to get the label from the ID for display
        for (const category of ALL_SKILLS_DATA) {
          const skill = category.skills.find((s) => s.id === id);
          if (skill) return skill.label;
        }
        return id; // Fallback
      });
      setSubmissionMessage(
        `Searching for positions requiring ${
          selectedSkills.size
        } skills: ${selectedLabels.join(", ")}`
      );
    }
    // In a real app, you would use React Router here to navigate or fetch data.
    // Example: navigate('/results', { state: { skills: Array.from(selectedSkills) } });
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#061839] mb-2 tracking-tight">
            Find Volunteer Opportunities
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Select the skills you want to utilize to find matching positions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Skills Sections */}
            <div className="space-y-8">
              {ALL_SKILLS_DATA.map((category) => (
                <SkillCategorySection
                  key={category.key}
                  category={category}
                  selectedSkills={selectedSkills}
                  onToggleSkill={handleToggleSkill}
                  onToggleAll={handleToggleAll}
                />
              ))}
            </div>

            {/* Submit Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
              <div>
                {submissionMessage && (
                  <p
                    className={`text-sm ${
                      selectedSkills.size === 0
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {submissionMessage}
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors flex items-center justify-center gap-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1C75BC] text-white font-semibold rounded-lg hover:bg-[#165a9a] transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C75BC]"
                >
                  Search Positions
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillsPositions;