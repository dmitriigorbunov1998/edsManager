import type { ReactNode } from 'react';
import './StatsCard.css';

export interface StatsCardProps {
  title: string;
  // value: number | string;
  icon: ReactNode;
  color: 'blue' | 'green' | 'yellow' | 'red' | 'cyan';
  subtitle?: string;
  trend?: string;
  onClick?: () => void;
}

export const StatsCard = ({
  title,
  /*value, */ icon,
  color,
  subtitle,
  trend,
  onClick,
}: StatsCardProps) => {
  return (
    <button
      className={`stats-card ${color}`}
      onClick={onClick}
      type="button"
      tabIndex={onClick ? 0 : -1}
    >
      <div className="stats-card-glow" />
      <div className="stats-card-top">
        <div className="stats-card-icon">{icon}</div>
        {trend && <span className="stats-card-trend">{trend}</span>}
      </div>
      <div className="stats-card-value">Value</div>
      <div className="stats-card-title">{title}</div>
      {subtitle && <div className="stats-card-subtitle">{subtitle}</div>}
    </button>
  );
};
