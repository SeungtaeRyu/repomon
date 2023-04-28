package com.repomon.rocketdan.domain.repo.repository;

import com.repomon.rocketdan.domain.user.entity.ActiveRepoEntity;
import com.repomon.rocketdan.domain.user.entity.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActiveRepoRepository extends JpaRepository<ActiveRepoEntity, Long> {

    Page<ActiveRepoEntity> findByUser(UserEntity userEntity, Pageable pageable);
    Long countByUser_UserId(Long userId);
}
