// Client-side filtering for writing posts
document.addEventListener('DOMContentLoaded', function() {
  const tagButtons = document.querySelectorAll('.tag-filter');
  const allButton = document.getElementById('tag-all');
  const postItems = document.querySelectorAll('.post-item');
  const filterNotice = document.getElementById('filter-notice');
  const selectedTagDisplay = document.getElementById('selected-tag-display');
  const clearFilterButton = document.getElementById('clear-filter');
  const noPostsMessage = document.getElementById('no-posts-message');

  function filterPosts(selectedTag) {
    let visibleCount = 0;
    
    postItems.forEach(item => {
      const postTags = JSON.parse(item.getAttribute('data-tags') || '[]');
      const shouldShow = !selectedTag || postTags.includes(selectedTag);
      
      if (shouldShow) {
        item.style.display = 'block';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    // Update UI
    if (selectedTag && filterNotice && selectedTagDisplay) {
      filterNotice.classList.remove('hidden');
      selectedTagDisplay.textContent = selectedTag;
    } else if (filterNotice) {
      filterNotice.classList.add('hidden');
    }

    // Show/hide no posts message
    if (noPostsMessage) {
      if (visibleCount === 0) {
        noPostsMessage.classList.remove('hidden');
      } else {
        noPostsMessage.classList.add('hidden');
      }
    }

    // Update button styles
    if (allButton) {
      allButton.className = selectedTag ? 
        'px-3 py-1 rounded-full text-sm transition-colors bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700' :
        'px-3 py-1 rounded-full text-sm transition-colors bg-blue-600 text-white';
    }

    tagButtons.forEach(btn => {
      const isSelected = btn.getAttribute('data-tag') === selectedTag;
      btn.className = isSelected ?
        'tag-filter px-3 py-1 rounded-full text-sm transition-colors bg-blue-600 text-white' :
        'tag-filter px-3 py-1 rounded-full text-sm transition-colors bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700';
    });
  }

  // Event listeners
  if (allButton) {
    allButton.addEventListener('click', () => filterPosts(null));
  }
  if (clearFilterButton) {
    clearFilterButton.addEventListener('click', () => filterPosts(null));
  }

  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tag = button.getAttribute('data-tag');
      filterPosts(tag);
    });
  });

  // Initialize
  filterPosts(null);
}); 