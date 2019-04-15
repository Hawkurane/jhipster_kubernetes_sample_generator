package com.jhipster.demo.crm.repository.search;

import com.jhipster.demo.crm.domain.ProductOrder;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link ProductOrder} entity.
 */
public interface ProductOrderSearchRepository extends ElasticsearchRepository<ProductOrder, Long> {
}
