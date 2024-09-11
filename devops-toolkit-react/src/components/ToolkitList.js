import React from 'react';
import ToolkitItem from './ToolkitItem';
import './ToolkitList.css'; // Import the CSS file

const toolkitData = [
  { title: '🔧 Version Control', tools: ['Git', 'GitHub', 'GitLab'] },
  { title: '🛠 CI/CD', tools: ['Jenkins', 'GitLab CI', 'CircleCI', 'Travis CI', 'GitHub Actions'] },
  { title: '🏗 Infrastructure as Code (IaC)', tools: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation'] },
  { title: '⚙ Configuration Management', tools: ['Ansible', 'Chef', 'Puppet', 'SaltStack'] },
  { title: '🐳 Containers', tools: ['Docker', 'Podman'] },
  { title: '🚢 Orchestration', tools: ['Kubernetes', 'OpenShift', 'Docker Swarm'] },
  { title: '📈 Monitoring & Logging', tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Splunk'] },
  { title: '☁ Cloud Providers', tools: ['AWS', 'Google Cloud', 'Azure', 'Oracle', 'Utho'] },
  { title: '🔧 Server Management', tools: ['Nginx', 'Apache', 'HAProxy'] },
  { title: '🔒 Security', tools: ['Vault', 'Snyk', 'Aqua Security', 'Twistlock'] },
  { title: '📂 OS & Scripting', tools: ['Linux', 'Shell Scripting'] },
  { title: '💬 Communication & Collaboration', tools: ['Slack', 'Microsoft Teams', 'Jira', 'Confluence'] },
  { title: '📚 Study Resources', tools: ['Explore free learning resources on YouTube, ChatGPT & Gemini'] },
];

function ToolkitList() {
  return (
    <div className="toolkit-list">
      {toolkitData.map((item, index) => (
        <ToolkitItem key={index} title={item.title} tools={item.tools} />
      ))}
    </div>
  );
}

export default ToolkitList;