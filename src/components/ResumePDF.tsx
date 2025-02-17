import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { type ResumeData } from "@/utils/data";



Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZg.ttf",
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    lineHeight: 1.5,
    fontFamily: "Inter",
    color: "#374151",
  },
  container: {
    maxWidth: 650,
    marginHorizontal: "auto",
  },
  header: {
    marginBottom: 24,
    textAlign: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 8,
    color: "#111827",
  },
  title: {
    fontSize: 12,
    color: "#4b5563",
    marginBottom: 16,
    marginTop: 10,
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 8,
    color: "#6b7280",
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 12,
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: 4,
    color: "#111827",
  },
  experienceItem: {
    marginBottom: 16,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  roleCompany: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  role: {
    fontWeight: 600,
    color: "#111827",
  },
  company: {
    color: "#4b5563",
  },
  date: {
    color: "#6b7280",
    fontSize: 10,
  },
  achievementList: {
    marginLeft: 16,
    marginTop: 8,
  },
  achievementItem: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 4,
  },
  bullet: {
    width: 8,
    color: "#6b7280",
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 24,
    marginBottom: 16,
  },
  column: {
    width: "48%",
  },
  skillCategory: {
    marginBottom: 12,
  },
  skillTitle: {
    fontWeight: 600,
    marginBottom: 6,
    color: "#111827",
  },
  educationItem: {
    marginBottom: 12,
  },
  degree: {
    fontWeight: 600,
    color: "#111827",
  },
  school: {
    color: "#4b5563",
  },
});

export const ResumePDF = ({ resume }: { resume: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{resume.basics.name}</Text>
          <Text style={styles.title}>{resume.basics.title}</Text>
          <View style={styles.contactInfo}>
            <Text>{resume.basics.email}</Text>
            <Text>•</Text>
            <Text>{resume.basics.linkedin}</Text>
          </View>
        </View>

        {/* Professional Summary */}
        <Text style={styles.sectionHeader}>Professional Summary</Text>
        <Text style={{ marginBottom: 16 }}>{resume.summary}</Text>

        {/* Professional Experience */}
        <Text style={styles.sectionHeader}>Professional Experience</Text>
        {resume.experience.map((exp) => (
          <View key={exp.id} style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <View style={styles.roleCompany}>
                <Text style={styles.role}>{exp.role}</Text>
                <Text style={styles.company}>| {exp.company}</Text>
              </View>
              <Text style={styles.date}>{exp.date}</Text>
            </View>
            <View style={styles.achievementList}>
              {exp.achievements.map((ach, i) => (
                <View key={i} style={styles.achievementItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{ach}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Skills Section */}
        <Text style={styles.sectionHeader}>Skills</Text>
        <View style={styles.gridContainer}>
          <View style={styles.column}>
            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Technical Skills</Text>
              {resume.skills.technical.map((skill, i) => (
                <View key={i} style={styles.achievementItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Soft Skills</Text>
              {resume.skills.soft.map((skill, i) => (
                <View key={i} style={styles.achievementItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Projects Section */}
        <Text style={styles.sectionHeader}>Projects</Text>
        <View style={{ marginBottom: 16 }}>
          {" "}
          {/* Removed gridContainer style */}
          <View style={{ marginBottom: 16 }}>
            {" "}
            {/* Added margin bottom */}
            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Open Source</Text>
              {resume.projects.openSource.map((project, i) => (
                <View key={i} style={styles.achievementItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{project}</Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Personal</Text>
              {resume.projects.personal.map((project, i) => (
                <View key={i} style={styles.achievementItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{project}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Education Section */}
        <Text style={styles.sectionHeader}>Education</Text>
        {resume.education.map((edu) => (
          <View key={edu.id} style={styles.educationItem}>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.school}>{edu.school}</Text>
            <Text style={styles.date}>{edu.date}</Text>
          </View>
        ))}

        {/* Certifications Section */}
        <Text style={styles.sectionHeader}>Certifications</Text>
        {resume.certifications.map((cert, i) => (
          <View key={i} style={styles.achievementItem}>
            <Text style={styles.bullet}>•</Text>
            <Text>{cert}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
