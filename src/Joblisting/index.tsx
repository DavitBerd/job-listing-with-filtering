import { useState } from "react";
import styles from "./style.module.scss";
import { Job } from "../types";

type JobListingsProps = {
  jobs: Job[];
};

const JobListings = ({ jobs }: JobListingsProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  const filteredJobs =
    selectedTags.length > 0
      ? jobs.filter((job) =>
          selectedTags.every((tag) => job.tags.includes(tag))
        )
      : jobs;

  return (
    <div className={styles.jobListings}>
      <div className={styles.header}></div>
      {selectedTags.length > 0 && (
        <div className={styles.selectedTags}>
          <div className={styles.tagsContainer}>
            <div>
              {selectedTags.map((tag) => (
                <span key={tag} className={styles.selectedTag}>
                  {tag}
                  <button
                    className={styles.removeTag}
                    onClick={() => removeTag(tag)}
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
            <button className={styles.clearAll} onClick={clearAllTags}>
              Clear
            </button>
          </div>
        </div>
      )}

      <div className={styles.jobsContainer}>
        {filteredJobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <img
              src={job.image}
              alt={`${job.name} logo`}
              className={styles.jobImage}
            />
            <div className={styles.jobDetails}>
              <div className={styles.jobHeader}>
                <div className={styles.jobInfo}>
                  <h3>{job.name}</h3>
                  {job.id === "1" && (
                    <>
                      <span className={styles.newBadge}>NEW!</span>
                      <span className={styles.featuredBadge}>FEATURED</span>
                    </>
                  )}
                  {job.id === "2" && (
                    <span className={styles.newBadge}>NEW!</span>
                  )}
                  {job.id === "3" && (
                    <span className={styles.newBadge}>NEW!</span>
                  )}
                </div>
                <h2>{job.position}</h2>
                <p className={styles.jobMeta}>
                  {job.postTime} • {job.jobType} • {job.location}
                </p>
              </div>
              <div className={styles.tags}>
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className={styles.tag}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
